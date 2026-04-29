// hooks/useParticleAnimation.ts (alternative with definite assignment)
import { useEffect, RefObject } from 'react';

class Particle {
  x!: number;
  y!: number;
  r!: number;
  vx!: number;
  vy!: number;
  alpha!: number;
  pulse!: number;
  color!: string;
  private colors: string[];

  constructor(width: number, height: number) {
    this.colors = ["#c9994a", "#f7c5c0", "#d4847a", "#e8c97a"];
    this.reset(width, height);
  }

  reset(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.r = Math.random() * 2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.pulse = Math.random() * Math.PI * 2;
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.pulse += 0.02;
    const a = this.alpha * (0.6 + 0.4 * Math.sin(this.pulse));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = a;
    ctx.fill();
    ctx.globalAlpha = 1;
    
    this.x += this.vx;
    this.y += this.vy;
    
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset(width, height);
    }
  }
}

export const useParticleAnimation = (canvasRef: RefObject<HTMLCanvasElement | null>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(particle => particle.draw(ctx, width, height));
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [canvasRef]);
};