import './globals.css';
import { ReactNode } from 'react';
import SideNav from '../components/SideNav';

export const metadata = {
  title: 'Yoga Arditya Putra — Software Engineer',
  description: 'Portfolio of Yoga Arditya Putra, a Fullstack Developer specializing in Next.js, React, and mobile development.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(108, 99, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 99, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.07) 0%, transparent 70%)',
          top: '-200px',
          right: '-100px',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'fixed',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 101, 132, 0.05) 0%, transparent 70%)',
          bottom: '50px',
          left: '300px',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <SideNav />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
