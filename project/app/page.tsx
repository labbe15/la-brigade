'use client';

import { useState, useEffect, useRef } from 'react';

export default function Landing() {
  const [phase, setPhase] = useState(0); // 0: loading, 1: logo reveal, 2: interactive
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Phase progression
    const timer1 = setTimeout(() => setPhase(1), 1500);
    const timer2 = setTimeout(() => setPhase(2), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Advanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
      color: string;
      trail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Create sophisticated particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        color: `hsl(${25 + Math.random() * 30}, 95%, ${50 + Math.random() * 30}%)`,
        trail: []
      });
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Advanced animation loop
    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle
        particle.life++;
        
        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Add check to prevent division by zero
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Apply velocity with damping
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Ensure particle coordinates are finite
        if (!isFinite(particle.x) || !isFinite(particle.y)) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 0.8;
          particle.vy = (Math.random() - 0.5) * 0.8;
        }

        // Add to trail
        particle.trail.push({ 
          x: particle.x, 
          y: particle.y, 
          opacity: particle.opacity 
        });
        
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }

        // Boundary wrapping with smooth transition
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw trail
        particle.trail.forEach((point, i) => {
          const trailOpacity = (i / particle.trail.length) * particle.opacity * 0.3;
          const trailSize = particle.size * (i / particle.trail.length) * 0.5;
          
          // Ensure trail coordinates are finite
          if (isFinite(point.x) && isFinite(point.y) && isFinite(trailSize)) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
            ctx.fillStyle = particle.color.replace(')', `, ${trailOpacity})`).replace('hsl', 'hsla');
            ctx.fill();
          }
        });

        // Draw main particle with glow - ensure all values are finite
        if (isFinite(particle.x) && isFinite(particle.y) && isFinite(particle.size)) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, particle.color.replace(')', `, ${particle.opacity})`).replace('hsl', 'hsla'));
          gradient.addColorStop(0.5, particle.color.replace(')', `, ${particle.opacity * 0.3})`).replace('hsl', 'hsla'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`).replace('hsl', 'hsla');
          ctx.fill();
        }

        // Respawn particle if life exceeded
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.trail = [];
        }
      });

      // Draw connections with advanced rendering
      particles.forEach((particle, i) => {
        particles.slice(i + 1, i + 5).forEach((otherParticle) => {
          // Ensure both particles have finite coordinates
          if (isFinite(particle.x) && isFinite(particle.y) && 
              isFinite(otherParticle.x) && isFinite(otherParticle.y)) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120 && isFinite(distance)) {
              const opacity = (1 - distance / 120) * 0.15;
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              gradient.addColorStop(0, `rgba(251, 146, 60, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(255, 165, 0, ${opacity * 0.5})`);
              gradient.addColorStop(1, `rgba(251, 146, 60, ${opacity})`);

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.href = '/home';
    }, 800);
  };

  return (
    <div className={`fixed inset-0 bg-black overflow-hidden transition-all duration-800 ${
      isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Advanced Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%, #000000 100%)'
        }}
      />

      {/* Geometric overlay patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-orange-500/20 rounded-full animate-pulse"
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {/* Loading phase */}
          {phase === 0 && (
            <div className="animate-pulse">
              <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto animate-bounce" />
            </div>
          )}

          {/* Logo reveal phase */}
          {phase >= 1 && (
            <div className={`mb-16 transition-all duration-2000 ease-out ${
              phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-wider leading-none">
                <div className="relative">
                  <span className="block text-white relative">
                    LA
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" 
                         style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  </span>
                  <span className="block text-orange-400 relative mt-2" style={{
                    textShadow: '0 0 30px rgba(251, 146, 60, 0.6), 0 0 60px rgba(251, 146, 60, 0.4)',
                    animation: 'glow 4s ease-in-out infinite alternate'
                  }}>
                    BRIGADE
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse" 
                         style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                  </span>
                </div>
              </h1>
              
              <div className={`mt-8 transition-all duration-1000 delay-1000 ${
                phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                  L'énergie brute de la nuit
                </p>
              </div>
            </div>
          )}
          
          {/* Interactive phase */}
          {phase >= 2 && (
            <div className={`transition-all duration-1000 ease-out ${
              phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={handleEnter}
                className="group relative px-16 py-5 bg-transparent border-2 border-orange-400 text-orange-400 font-semibold tracking-[0.3em] hover:bg-orange-400 hover:text-black transition-all duration-700 overflow-hidden text-lg uppercase"
                style={{
                  boxShadow: '0 0 30px rgba(251, 146, 60, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span className="relative z-10">Entrer</span>
                
                {/* Animated background fill */}
                <div className="absolute inset-0 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                
                {/* Pulsing border */}
                <div className="absolute inset-0 border-2 border-orange-400 animate-pulse opacity-50" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-orange-400/20 blur-xl group-hover:bg-orange-400/40 transition-all duration-700" />
              </button>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 h-10 border-2 border-orange-400/60 rounded-full flex justify-center relative overflow-hidden">
                    <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-bounce" 
                         style={{ animationDelay: '0.5s' }} />
                  </div>
                  <span className="text-xs text-gray-500 tracking-wider">SCROLL</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
    </div>
  );
}