import "../globals.css"
export const metadata = {
  title: 'Join Postre',
  description: 'Register your account or Login to your Postre Account',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="flex min-h-screen justify-center items-center">
            {children}
        </body>
    </html>
  )
}
