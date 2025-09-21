import { cn } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

interface GlobalInputProps {
  className?: string;
  inputProps?: React.ComponentProps<"input">;
}
const GlobalInput = ({ className, inputProps }: GlobalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Cmd + / on Mac or Ctrl + / on other platforms
      if ((event.metaKey || event.ctrlKey) && event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div
      className={cn(
        "flex items-center w-full max-w-sm placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    >
      <IconSearch />
      <input
        ref={inputRef}
        className="w-full ml-2 text-gray-700 bg-transparent outline-none dark:text-gray-300 dark:placeholder-gray-500"
        {...inputProps}
      />
      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        ⌘/
      </span>
    </div>
  );
};

export default GlobalInput;
