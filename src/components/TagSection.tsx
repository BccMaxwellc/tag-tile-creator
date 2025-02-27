
import { TagTileCreator } from "./TagTileCreator";

interface TagSectionProps {
  type: "positive" | "negative";
}

export const TagSection = ({ type }: TagSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {type === "positive" ? "Positive Prompts" : "Negative Prompts"}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          {type === "positive" 
            ? "Add the elements you want to include in your image." 
            : "Add the elements you want to exclude from your image."}
        </p>
      </div>
      <TagTileCreator />
    </div>
  );
};
