'use client'

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const useOnReveal = (threshold = 0.7) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const handleVisibilityChange = useCallback(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  useEffect(() => {
    handleVisibilityChange()
  }, [handleVisibilityChange]);

  return { ref, isVisible };  
};

export default useOnReveal;
