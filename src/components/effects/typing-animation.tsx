
"use client";

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export function TypingAnimation({ text, typingSpeed = 100, className }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, text, typingSpeed, isClient]);

  if (!isClient) {
    // Render the full text on the server or before hydration to avoid mismatch
    // Or render nothing initially if preferred, but this helps with SEO and initial layout
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      {charIndex < text.length && <span className="blinking-cursor"></span>}
    </span>
  );
}
