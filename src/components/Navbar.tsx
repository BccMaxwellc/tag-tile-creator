
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Home, HelpCircle, Gift, Music } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <Music className="h-8 w-8 text-blue-500" aria-hidden="true" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hidden sm:inline-block">
            Tag2Prompt.ai
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <Link 
            to="/" 
            className="flex items-center px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
          >
            <Home className="h-4 w-4 mr-1.5" />
            <span className="hidden sm:inline-block">Home</span>
          </Link>
          <Link 
            to="/how-to-use" 
            className="flex items-center px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
          >
            <HelpCircle className="h-4 w-4 mr-1.5" />
            <span className="hidden sm:inline-block">How to use</span>
          </Link>
          <Link 
            to="/donate" 
            className="flex items-center px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
          >
            <Gift className="h-4 w-4 mr-1.5" />
            <span className="hidden sm:inline-block">Donate</span>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
