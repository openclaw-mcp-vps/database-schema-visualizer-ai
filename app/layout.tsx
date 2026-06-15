import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Schema Visualizer AI — Auto-generate schema docs & diagrams',
  description: 'AI-powered database schema documentation generator. Upload your schema and get visual diagrams with AI-written relationship insights instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e0ae45d0-40e1-45dd-8e99-623101b07ef3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
