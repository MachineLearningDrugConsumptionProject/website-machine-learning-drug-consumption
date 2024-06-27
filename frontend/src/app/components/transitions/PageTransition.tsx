"use client"

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxCircleExpansion() {

  const viewRef = useRef(null)
  const isInView = useInView(viewRef, { once: false })

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const size = useTransform(scrollYProgress, [0, 1], ['0vmin', '200vmax']);
  const borderTopRadius = useTransform(scrollYProgress, [0, 0.9, 1], ['50%', '50%', '0%']);

  return (
    <div ref={viewRef} className="h-[100vh] relative mt-24">
      <div ref={scrollRef} className="h-full bg-gray-200">
        {
          isInView &&
          <motion.div
            style={{
              width: size,
              height: size,
              borderTopLeftRadius: borderTopRadius,
              borderTopRightRadius: borderTopRadius,
              x: '-50%',
              y: '50%'
            }}
            className="fixed bottom-0 left-1/2 bg-light-background origin-bottom"
          />

        }
      </div>
    </div>
  );
}