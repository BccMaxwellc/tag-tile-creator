
import { motion } from "framer-motion";

interface TagProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Tag = ({ text, isSelected, onClick }: TagProps) => {
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-full text-sm font-medium
        transition-all duration-200 ease-in-out
        ${
          isSelected
            ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        }
      `}
    >
      {text}
    </motion.button>
  );
};
