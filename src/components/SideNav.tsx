"use client"; // Mark this as a Client Component
import React, { useState } from 'react';
import Link from 'next/link';
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
              <img 
                src="/assets/yoga-foto.jpg" 
                className="w-full h-full object-cover" 
                alt="Profile image" 
                loading="lazy" 
                decoding="async" 
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor" }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/oktaviardi/" target="_blank" className="text-gray-200" aria-label="Linkedin" title="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor" }}>
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default SideNav;
