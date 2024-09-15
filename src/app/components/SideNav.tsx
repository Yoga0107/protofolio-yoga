// src/app/components/SideNav.tsx
"use client"; // Mark this as a Client Component
import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Make sure to install react-icons

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4">
        <h2 className={`text-lg font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>My Portfolio</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <HiChevronLeft /> : <HiChevronRight />}
        </button>
      </div>
      <nav>
        <ul>
          <li className="p-4">
            <Link href="/" className="block">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/projects" className="block">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/experience" className="block">Experience</Link>
          </li>
          <li className="p-4">
            <Link href="/connect" className="block">Let&apos;s Connect</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
