import React, { useEffect, useRef, useState } from 'react';
import HeroSectionAnotherPic from './HeroSectionAnotherPic';
import { imageBase64 } from '../../constants/constants';

function HeroSectionPic() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const container = containerRef.current;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.color = color;
        this.size = this.effect.gap - 0.3;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.1;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
      }

      draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particlesArray = [];
        this.image = document.getElementById('image1');
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
        this.x = this.centerX - this.image.width * 0.5;
        this.y = this.centerY - this.image.height * 0.5;
        this.gap = 5;
        this.mouse = {
          radius: 4000,
          x: undefined,
          y: undefined,
        };
        // container.addEventListener('mousemove', (event) => {
        //   const rect = container.getBoundingClientRect();
        //   effect.mouse.x = event.clientX - rect.left;
        //   effect.mouse.y = event.clientY - rect.top;
        // });
      }

      init(context) {
        context.drawImage(this.image, this.x, this.y);
        const pixels = context.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.gap) {
          for (let x = 0; x < this.width; x += this.gap) {
            const index = (y * this.width + x) * 4;
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const alpha = pixels[index + 3];
            const color = `rgb(${red},${green},${blue})`;
            if (alpha > 0) {
              this.particlesArray.push(new Particle(this, x, y, color));
            }
          }
        }
      }

      draw(context) {
        this.particlesArray.forEach((particle) => {
          particle.draw(context);
        });
      }

      update() {
        this.particlesArray.forEach((particle) => {
          particle.update();
        });
      }

      handleMouseMove(event) {
        // Code to calculate mouse coordinates relative to the canvas
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = event.clientX - rect.left;
        this.mouse.y = event.clientY - rect.top;
      }
    }
    const effect = new Effect(canvas.width, canvas.height);
    effect.init(ctx);
    const boundHandleMouseMove = effect.handleMouseMove.bind(effect);
    container.addEventListener('mousemove', boundHandleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.draw(ctx);
      effect.update();
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      container.removeEventListener('mousemove', boundHandleMouseMove);
    };
  }, [windowWidth]);

  return (
    <div ref={containerRef} className="heroSectionPic__container">
      {windowWidth <= 1300 ? <HeroSectionAnotherPic />
        : (
          <>
            <canvas ref={canvasRef} id="canvas1" />
            <img src={imageBase64} alt="imageAvatar" id="image1" />
          </>
        )}
    </div>
  );
}

export default HeroSectionPic;
