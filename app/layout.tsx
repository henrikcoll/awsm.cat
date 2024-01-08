import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import { Menu } from "@/components/menu"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'awsm.cat',
  description: 'Simple pastebin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col max-w-3xl px-4 py-4 mx-auto h-full">
            <Menu />
            <div className="flex-grow lg:pt-20">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
