"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  // Add a state to track if the component has mounted
  const [mounted, setMounted] = React.useState(false)

  // When the component mounts on the client, set the mounted state to true
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Before the component has mounted, render nothing or a placeholder
  if (!mounted) {
    // You can return null or a placeholder/spinner here
    return (
      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-md">
        {/* Placeholder to prevent layout shift */}
      </div>
    )
  }

  // Once mounted, render the button with the correct theme icon
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md"
      aria-label="Toggle theme" // Added for better accessibility
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </button>
  )
}
