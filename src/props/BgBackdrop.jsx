

import { useEffect, useRef } from 'react';

const BgBackdrop = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Circle {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }
      
      draw = () => {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        canvasContext.lineWidth = 2;
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
      }
      
      update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }
    
    const colorPalette = ['#FF7700', '#14DA65', '#D428FF', '#FF2F32', '#9AC81B'];
    const circleArray = [];

    // Ensure that all four colors are used
    for (let i = 0; i < colorPalette.length; i++) {
      const x = Math.random() * (innerWidth - 280) + 50;
      const y = Math.random() * (innerHeight - 280) + 50;
      const radius = 300;

      // Increased speed: larger range for dx and dy
      const dx = (Math.random() - 0.5) * 12;  // Adjusted to increase speed
      const dy = (Math.random() - 0.5) * 12;  // Adjusted to increase speed

      const color = colorPalette[i]; // Use one color per iteration
      
      circleArray.push(new Circle(x, y, dx, dy, radius, color));
    }

    const animate = () => {
      requestAnimationFrame(animate);
      canvasContext.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };

    animate();

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);
  
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div className="fixed left-0 top-0 w-full h-[100vh] -z-10 bg-[#E3E9D2]/[0.75] backdrop-blur-[200px]"></div>
    </div>
  )
};

export default BgBackdrop;