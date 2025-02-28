
import { Link } from "react-router-dom";
import { Music, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-800/50 py-6 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Music className="h-6 w-6 text-blue-500" aria-hidden="true" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Tag2Prompt.ai
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link to="/" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/how-to-use" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
              How to use
            </Link>
            <Link to="/donate" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
              Donate
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-slate-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-3 w-3 mx-1 text-blue-500" fill="currentColor" /> by Tag2Prompt.ai Team
          </p>
          <p className="mt-1">© {currentYear} Tag2Prompt.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
