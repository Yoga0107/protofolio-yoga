// src/app/components/ImageModal.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-full max-w-md">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          &times;
        </button>
        <Image 
          src={imageSrc} 
          alt="Profile preview" 
          className="w-full h-auto rounded-lg" 
          width={600} // Set the desired width
          height={400} // Set the desired height
        />
      </div>
    </div>
  );
};

export default ImageModal;
