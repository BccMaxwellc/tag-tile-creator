
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-blue-500">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page not found</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700">
            <Link to="/">
              Go back home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
