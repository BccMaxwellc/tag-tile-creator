
import { TagTileCreator } from "@/components/TagTileCreator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide">
            PROMPT ENGINEERING
          </span>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tag Tile Creator
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Transform your comma-separated words into interactive tags. Select and arrange them to create your perfect prompt.
          </p>
        </div>
        <TagTileCreator />
      </div>
    </div>
  );
};

export default Index;
