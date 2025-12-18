import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useTheme } from "next-themes"

interface CodeBlockProps {
  children: string
  className?: string
}

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const lines = children.split("\n")

  return (
    <div className={className}>
      <SyntaxHighlighter
        language="tsx"
        style={isDark ? oneDark : oneLight}
        showLineNumbers
        wrapLines
       lineProps={(lineNumber)=>{
       const line=lines[lineNumber-1]
        if (line?.includes("multiple")) {
            return {
              style: {
                backgroundColor: isDark
                  ? "rgba(59,130,246,0.15)"
                  : "rgba(59,130,246,0.1)",
                borderLeft: "3px solid #3b82f6",
                paddingLeft: "12px",
              },
            }
          }

          return {}
       }}
        customStyle={{
          margin: 0,
          padding: "16px",
          borderRadius: "12px",
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          backgroundColor: isDark ? "#0A0A0A" : "#ffffff",
          color: isDark ? "#e5e7eb" : "#111827",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "12px",
          textAlign: "right",
          userSelect: "none",
          color: isDark ? "#6b7280" : "#9ca3af",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              "JetBrains Mono, Fira Code, Menlo, Monaco, Consolas, monospace",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
