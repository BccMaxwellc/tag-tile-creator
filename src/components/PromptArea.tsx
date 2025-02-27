
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface PromptAreaProps {
  selectedTags: string[];
}

export const PromptArea = ({ selectedTags }: PromptAreaProps) => {
  const [finalPrompt, setFinalPrompt] = useState("");

  useEffect(() => {
    setFinalPrompt(selectedTags.join(", "));
  }, [selectedTags]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalPrompt);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700"
    >
      <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
        Final Prompt
      </h2>
      <Textarea
        value={finalPrompt}
        readOnly
        className="min-h-[100px] mb-4 bg-slate-50 dark:bg-slate-900"
        placeholder="Your generated prompt will appear here..."
      />
      <Button 
        onClick={handleCopy}
        disabled={!finalPrompt}
        className="w-full sm:w-auto transition-all hover:scale-105"
      >
        Copy to Clipboard
      </Button>
    </motion.div>
  );
};
