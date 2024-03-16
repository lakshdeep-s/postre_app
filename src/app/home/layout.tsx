import "../globals.css"

export const metadata = {
  title: 'Postre | Home',
  description: 'Your Postre Feed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
