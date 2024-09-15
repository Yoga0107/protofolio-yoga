"use client";

import { useState } from 'react';
import Link from 'next/link';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true); // Starts open by default

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative flex ${isOpen ? 'w-64' : 'w-16'} bg-[#C2B280] min-h-screen transition-all duration-300`}>
      {/* Hamburger/Arrow toggle button */}
      <button
        onClick={toggleNav}
        className={`absolute ${isOpen ? 'right-[-12px] top-1/2 transform -translate-y-1/2' : 'p-4'} text-[#3E2723] bg-[#A1887F] rounded-full w-6 h-12 flex items-center justify-center transition-transform duration-300`}
      >
        <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
          ▶ {/* Arrow symbol */}
        </span>
      </button>

      {/* Navigation links */}
      {isOpen && (
        <nav className="flex flex-col space-y-4 mt-8 text-[#5D4037]">
          <Link href="/" className="p-4 hover:bg-[#A1887F]">Home</Link>
          <Link href="/projects" className="p-4 hover:bg-[#A1887F]">Projects</Link>
          <Link href="/experience" className="p-4 hover:bg-[#A1887F]">Experience</Link>
          <Link href="/connect" className="p-4 hover:bg-[#A1887F]">Let's Connect</Link>
        </nav>
      )}
    </div>
  );
};

export default SideNav;
