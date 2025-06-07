import "./globals.css"
import { ThemeProvider } from "next-themes"
import ThemeToggleButton from "./components/theme-toggle-button"
import "dseg/css/dseg.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="absolute right-2 top-2">
            <ThemeToggleButton />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
