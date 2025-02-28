
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const HowToUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How to Use Tag2Prompt.ai
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A simple guide to help you create perfect prompts for Stable Diffusion.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Step 1: Add Your Tags
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-2">
                Enter comma-separated words or phrases in the input field and click "Generate Tags".
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Example: "beautiful landscape, mountain, sunset, realistic, detailed"
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Step 2: Select Your Tags
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Click on tags in the "Available Tags" section to move them to the "Selected Tags" section. 
                This will automatically add them to your prompt.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Step 3: Refine Your Prompt
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                You can remove tags from your prompt by clicking on them in the "Selected Tags" section. 
                They will move back to the "Available Tags" section.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Step 4: Copy Your Prompt
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Once you're happy with your prompt, use the copy button to copy it to your clipboard. 
                Then paste it into your favorite Stable Diffusion tool.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowToUse;
