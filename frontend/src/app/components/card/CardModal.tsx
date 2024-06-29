import Image from 'next/image';
import React from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imagePath: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imagePath }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white max-w-screen-lg w-full max-h-screen-lg h-full p-4 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <FiX className="h-6 w-6" />
        </button>
        <div className="h-full flex justify-center items-center">
          <Image src={imagePath} alt="Full Image" layout="intrinsic" objectFit="contain" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
