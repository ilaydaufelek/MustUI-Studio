import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {vscDarkPlus,vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

interface CodeBlockProps{
  children:string;
 
}


 export  const CodeBlock = ({ children}: CodeBlockProps) => {
     const { theme } = useTheme();
  const isDark = theme === "dark";
    
  return (
    <SyntaxHighlighter
      language="tsx"
      style={isDark ? vscDarkPlus : vs  } 
      showLineNumbers
      wrapLines
      lineNumberStyle={{
        color: isDark ? "#6b7280" : "#9ca3af",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
