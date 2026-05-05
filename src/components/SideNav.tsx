"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, Share2, Mail, X, Menu } from 'react-feather';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/pages/experience', label: 'Experience', icon: Briefcase },
  { href: '/pages/projects', label: 'Projects', icon: Code },
  { href: '/pages/socialmedia', label: 'Social', icon: Share2 },
];

export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-[60] p-2.5 rounded-xl md:hidden"
        style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', color: '#f0f0ff', cursor: 'pointer' }}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[45] md:hidden"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className="fixed top-0 left-0 h-screen z-50 flex flex-col"
        style={{
          width: 'var(--sidebar-width)',
          background: 'rgba(15, 15, 26, 0.97)',
          borderRight: '1px solid var(--border-color)',
          backdropFilter: 'blur(24px)',
          transform: mobileOpen ? 'translateX(0)' : undefined,
          transition: 'transform 0.3s ease',
        }}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="text-center mb-8 mt-2">
            <div style={{ position: 'relative', width: 84, height: 84, margin: '0 auto 16px' }}>
              <div style={{
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
              }} />
              <div style={{ position: 'relative', width: 84, height: 84, zIndex: 1 }}>
                <Image
                  src="/assets/yoga-foto.jpg"
                  alt="Yoga Arditya Putra"
                  width={84}
                  height={84}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #0f0f1a',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            <h2 className="display-font" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
              Yoga Arditya Putra
            </h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 12 }}>
              Fullstack Developer
            </p>
            <div className="status-badge" style={{ margin: '0 auto', display: 'inline-flex' }}>
              <span className="status-dot" />
              Available for work
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--border-color)', marginBottom: 24 }} />

          <nav className="flex flex-col gap-1 flex-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
                  <Icon size={16} style={{ opacity: isActive ? 1 : 0.6 }} />
                  <span>{label}</span>
                  {isActive && (
                    <div style={{
                      marginLeft: 'auto',
                      width: 6, height: 6,
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 20, marginTop: 16 }}>
            <a
              href="mailto:yogaputra0107@gmail.com"
              className="nav-link"
              style={{ justifyContent: 'center', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)' }}
            >
              <Mail size={15} />
              <span style={{ fontSize: '0.72rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                yogaputra0107@gmail.com
              </span>
            </a>
            <p className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 16 }}>
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </aside>

      <style>{`
        @media (max-width: 767px) {
          aside { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
