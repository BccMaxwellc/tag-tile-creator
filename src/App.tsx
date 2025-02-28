
import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowToUse from "./pages/HowToUse";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
