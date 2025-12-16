"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        relative
        w-8 h-8
        rounded-md
        border border-zinc-400 hover:bg-zinc-300/30 transition-colors
        flex items-center justify-center
        overflow-hidden
      "
    >
      <Sun
        className="
          absolute
          h-4 w-4
          transition-all duration-300
          scale-100 rotate-0 opacity-100
          dark:scale-0 dark:-rotate-90 dark:opacity-0
        "
      />

      <Moon
        className="
          absolute
          h-4 w-4
          transition-all duration-300
          scale-0 rotate-90 opacity-0
          dark:scale-100 dark:rotate-0 dark:opacity-100
        "
      />
    </button>
  )
}
