import Navbar from "@/components/Navbar/Navbar"
import "../globals.css"
export const metadata = {
  title: 'Postre | Read, Write and Inspire',
  description: "Write to your Heart's Content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="min-h-screen">
          <Navbar/>
          {children}
        </body>
    </html>
  )
}
