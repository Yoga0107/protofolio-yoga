// src/app/layout.tsx
import './globals.css'; // Import your global styles if any
import { ReactNode } from 'react';
import SideNav from '../components/SideNav'; // Import the SideNav component

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Your Portfolio</title> {/* Set your title here */}
      </head>
      <body className="flex bg-gray-900 text-gray-100 min-h-screen">
        <SideNav /> {/* Place SideNav here to make it appear on all pages */}
        <main className="flex-1 p-8 md:ml-[300px] transition-all duration-300 overflow-y-auto"> {/* Adjust margin based on your SideNav width */}
          {children} {/* This will render the pages */}
        </main>
      </body>
    </html>
  );
}
