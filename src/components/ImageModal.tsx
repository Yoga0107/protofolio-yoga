"use client";
import React from 'react';
import Image from 'next/image';
import { X } from 'react-feather';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative"
        style={{ maxWidth: 480, width: '90%' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          <X size={18} />
        </button>
        <Image
          src={imageSrc}
          alt="Profile preview"
          width={480}
          height={480}
          style={{ borderRadius: 20, width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
