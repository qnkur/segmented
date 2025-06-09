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
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
            <header className="fixed right-4 top-4">
              <ThemeToggleButton />
            </header>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
