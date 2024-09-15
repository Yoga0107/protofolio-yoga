// src/app/layout.tsx
import './globals.css'; // Import your global styles if any
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Your Portfolio</title> {/* Set your title here */}
      </head>
      <body>
        {children} {/* This will render the pages */}
      </body>
    </html>
  );
}
