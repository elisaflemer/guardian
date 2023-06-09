import './globals.css'

export const metadata = {
  title: 'Guardian',
  description: 'Plataforma desenvolvida por Hack4Change',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white text-zinc-700'> {children}</body>
    </html>
  )
}
