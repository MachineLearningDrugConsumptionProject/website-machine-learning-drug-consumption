"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Modal from './CardModal';

interface TerminalCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const Card: React.FC<TerminalCardProps> = ({ title, description, imagePath }) => {
    const [showImage, setShowImage] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    
    const toggleImage = () => {
        setShowImage(!showImage);
    };

    const [showFullImage, setShowFullImage] = useState(false);

    const toggleImageSize = () => {
      setShowFullImage(!showFullImage);
    };

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setImageDimensions({ width: naturalWidth, height: naturalHeight });
    };
  
    return (
        <div className="w-full max-w-3xl mx-auto bg-dark-accent text-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-300 transform transition-all duration-300 hover:scale-105">
        <div className="p-6 relative">
          <div className="absolute top-2 right-2">
            <button
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors"
              onClick={toggleImage}
            >
              {showImage ? (
                <FiChevronUp className="h-6 w-6 text-gray-600" />
              ) : (
                <FiChevronDown className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          {showImage && imagePath && (
            <div
              className={`relative w-full mb-4 overflow-hidden ${showFullImage ? '' : 'h-96'}`}
              onClick={toggleImageSize}
              style={showFullImage ? { height: imageDimensions.height, width: imageDimensions.width } : {}}
            >
                <Image 
                  src={imagePath}
                  alt="Card" 
                  layout="fill" 
                  objectFit={showFullImage ? 'contain' : 'cover'}
                  onLoad={handleImageLoad}
                />
            </div>
          )}
          {/* <Modal isOpen={showFullImage} onClose={toggleImageSize} imagePath={imagePath} /> */}
        </div>
      </div>
  );
};

export default Card;
