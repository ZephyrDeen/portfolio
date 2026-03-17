import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
  showCursor?: boolean;
  loop?: boolean;
}

export function TypewriterText({ 
  text, 
  speed = 100, 
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '', 
  as: Component = 'div',
  showCursor = true,
  loop = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && displayedText.length < text.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText.length === text.length && loop) {
      // Finished typing, pause before deleting
      setIsPaused(true);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0 && loop) {
      // Finished deleting, start typing again
      setIsDeleting(false);
    }
  }, [displayedText, isDeleting, isPaused, text, speed, deleteSpeed, pauseTime, loop]);

  return (
    <Component className={`${className} ${showCursor ? 'typewriter-cursor' : ''}`}>
      {displayedText}
    </Component>
  );
}
