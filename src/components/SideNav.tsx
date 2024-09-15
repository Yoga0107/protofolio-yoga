"use client"; // Mark this as a Client Component
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import ImageModal from './ImageModal';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-gray-800 text-gray-200 shadow-lg">
      <div className="flex items-center justify-center mt-8 mb-4">
        <a href="#" onClick={handleImageClick}>
          <div className="avatar transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
              <Image 
                src="/assets/yoga-foto.jpg" 
                className="w-full h-full object-cover" 
                alt="Profile image" 
                loading="lazy" 
                decoding="async"
                width={96} // Set the width of the image
                height={96} // Set the height of the image
              />
            </div>
          </div>
        </a>
      </div>

      {/* Image Modal */}
      <ImageModal isOpen={isOpen} onClose={handleCloseModal} imageSrc="/assets/yoga-foto.jpg" />

      <ul className="menu flex-grow overflow-y-auto mt-4 space-y-2">
        <li>
          <Link href="/" className="block py-3 px-4 rounded-lg transition-colors duration-300 bg-gray-700 hover:bg-gray-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/pages/projects" className="block py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/pages/experiences" className="block py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600">
            Experiences
          </Link>
        </li>
        <li>
          <Link href="/pages/socialmedia" className="block py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600">
            Social Media
          </Link>
        </li>
        <li>
          <a 
            href="mailto:me@oktaviardi.com" 
            target="_blank" 
            className="block py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600"
            referrerPolicy="no-referrer-when-downgrade"
          >
            <span className="animate__animated animate__headShake animate__repeat-3 animate__delay-5s">Contact Me</span>
            <span className="animate__animated animate__tada animate__delay-5s animate__infinite">🤙</span>
          </a>
        </li>
      </ul>

      <div className="social-icons px-4 pb-5 pt-1 flex justify-center space-x-4 border-t border-gray-700">
        <a href="https://github.com/okta2510" target="_blank" className="text-gray-200" aria-label="Github" title="Github">
          {/* Github icon SVG */}
        </a>
        <a href="https://www.linkedin.com/in/oktaviardi/" target="_blank" className="text-gray-200" aria-label="Linkedin" title="Linkedin">
          {/* LinkedIn icon SVG */}
        </a>
      </div>
    </aside>
  );
};

export default SideNav;
