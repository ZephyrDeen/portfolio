import { type ElementType, type MouseEvent, useState } from 'react';

interface PaintTextProps {
  as?: ElementType;
  className?: string;
  text: string;
}

export function PaintText({ as: Component = 'span', className = '', text }: PaintTextProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isInline = Component === 'span';

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const mask = `radial-gradient(circle 88px at ${position.x}px ${position.y}px, black 0, black 48%, transparent 72%)`;
  return (
    <Component
      className={`paint-text ${isInline ? 'paint-text--inline' : ''} ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={handleMove}
    >
      <span className="paint-text__base">{text}</span>
      <span
        aria-hidden="true"
        className={`paint-text__overlay ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{
          WebkitMaskImage: mask,
          maskImage: mask
        }}
      >
        {text}
      </span>
    </Component>
  );
}
