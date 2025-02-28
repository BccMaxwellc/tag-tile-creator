
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Heart className="h-16 w-16 text-blue-500 mx-auto mb-4" fill="#0ea5e9" strokeWidth={1} />
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Support Tag2Prompt.ai
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Your donations help us maintain and improve this tool. Every contribution, no matter how small, makes a difference.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                Why Donate?
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep Tag2Prompt.ai free and accessible to everyone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fund the development of new features</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Support server costs and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enable us to provide better support and documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                Donation Options
              </h2>
              
              <div className="space-y-4 flex flex-col items-center">
                <Button 
                  className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                  size="lg"
                >
                  <Heart className="h-4 w-4 mr-2" fill="white" />
                  Donate via PayPal
                </Button>
                
                <Button 
                  className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                  size="lg"
                >
                  <Heart className="h-4 w-4 mr-2" fill="white" />
                  Support on Patreon
                </Button>
                
                <Button 
                  className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                  size="lg"
                >
                  <Heart className="h-4 w-4 mr-2" fill="white" />
                  Buy Me a Coffee
                </Button>
              </div>
            </div>
            
            <div className="text-center text-slate-500 dark:text-slate-400 text-sm">
              <p>For any questions about donations, please contact us at:</p>
              <p className="text-blue-500 mt-1">support@tag2prompt.ai</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
