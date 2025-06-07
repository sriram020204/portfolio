
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder or null to avoid hydration mismatch during server rendering
    // and before the client-side theme is resolved.
    // A div matching the expected size can prevent layout shifts.
    return <div className="flex items-center space-x-2 h-10 w-[88px]"></div>;
  }

  const isDarkMode = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-colors ${
          !isDarkMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-colors ${
          isDarkMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
    </div>
  )
}
