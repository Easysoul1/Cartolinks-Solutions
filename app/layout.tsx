import React from 'react';

export const metadata = { title: 'App', description: 'Next.js app' }
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
