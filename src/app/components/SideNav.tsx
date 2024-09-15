"use client";
// src/app/components/SideNav.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* Use an arrow or icon instead of X */}
      </button>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/connect">Let&apos;s Connect</Link> {/* Escaped single quote */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
