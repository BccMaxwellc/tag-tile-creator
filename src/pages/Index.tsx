
import { TagSection } from "@/components/TagSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-medium text-blue-500 dark:text-blue-400 mb-2 tracking-wide">
              PROMPT ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Tag2Prompt.ai
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Transform your comma-separated words into interactive tags. Select and arrange them to create your perfect prompt.
            </p>
          </div>
          
          <div className="space-y-12">
            <TagSection type="positive" />
            <div className="border-t border-slate-200 dark:border-slate-700" />
            <TagSection type="negative" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
