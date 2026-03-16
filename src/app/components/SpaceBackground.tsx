import { useEffect, useRef } from 'react';

export function SpaceBackground() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    // Generate random stars
    const starCount = 200;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random animation duration (2-5s)
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      starsRef.current.appendChild(star);
      stars.push(star);
    }

    // Generate shooting stars
    const shootingStarCount = 3;
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.width = `${Math.random() * 100 + 100}px`;
      shootingStar.style.animationDelay = `${Math.random() * 10}s`;
      
      starsRef.current.appendChild(shootingStar);
      stars.push(shootingStar);
    }

    // Cleanup
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div className="space-background">
      <div ref={starsRef} className="stars" />
      
      {/* Nebula effects */}
      <div 
        className="nebula" 
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '70%',
        }}
      />
      <div 
        className="nebula" 
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          bottom: '20%',
          left: '10%',
          animationDelay: '5s',
        }}
      />
      <div 
        className="nebula" 
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)',
          top: '40%',
          right: '15%',
          animationDelay: '10s',
        }}
      />
    </div>
  );
}
