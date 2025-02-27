
import { useState } from "react";
import { Tag } from "./Tag";
import { PromptArea } from "./PromptArea";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const TagTileCreator = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!input.trim()) {
      toast.error("Please enter some words first");
      return;
    }
    
    const newTags = input
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    if (newTags.length === 0) {
      toast.error("No valid tags found");
      return;
    }

    setTags(newTags);
    toast.success(`Generated ${newTags.length} tags`);
  };

  const handleClear = () => {
    setInput("");
    setTags([]);
    setSelectedTags([]);
    toast.success("Cleared all tags");
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => {
      const isSelected = prev.includes(tag);
      if (isSelected) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <Textarea
          placeholder="Paste your comma-separated words here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[120px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
        />
        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={handleGenerate}
            className="w-full sm:w-auto transition-all hover:scale-105"
          >
            Generate Tags
          </Button>
          <Button 
            onClick={handleClear}
            variant="outline"
            className="w-full sm:w-auto transition-all hover:scale-105"
          >
            Clear All
          </Button>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Available Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag
                  key={`${tag}-${index}`}
                  text={tag}
                  isSelected={selectedTags.includes(tag)}
                  onClick={() => handleTagClick(tag)}
                />
              ))}
            </div>
          </div>

          <PromptArea selectedTags={selectedTags} />
        </div>
      )}
    </div>
  );
};
