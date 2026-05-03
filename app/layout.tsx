import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Deadline Tracker — Track client payment delays before they hurt cashflow',
  description: 'Monitors invoice due dates and sends escalating reminders to clients with payment behavior analytics. Built for freelancers and small agencies managing 10+ clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="079287fb-0a98-4bdd-a4ac-c8e1bd7896d3"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
