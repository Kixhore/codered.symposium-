function ParticleBackground() {
  const canvasRef = React.useRef(null);
  const digitsRef = React.useRef([]);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize falling binary digits
    const digitCount = 40;
    digitsRef.current = [];
    
    for (let i = 0; i < digitCount; i++) {
      digitsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: Math.random() * 2 + 1,
        digit: Math.random() > 0.5 ? '1' : '0',
        opacity: Math.random() * 0.6 + 0.3,
        fontSize: Math.random() * 8 + 12
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw falling digits
      digitsRef.current.forEach((digit) => {
        digit.y += digit.speed;
        
        // Reset digit when it goes off screen
        if (digit.y > canvas.height + 50) {
          digit.y = -50;
          digit.x = Math.random() * canvas.width;
          digit.digit = Math.random() > 0.5 ? '1' : '0';
        }
        
        // Draw digit
        ctx.font = `${digit.fontSize}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(255, 7, 58, ${digit.opacity})`;
        ctx.textAlign = 'center';
        ctx.fillText(digit.digit, digit.x, digit.y);
        
        // Add subtle glow effect
        ctx.shadowColor = 'rgba(255, 7, 58, 0.3)';
        ctx.shadowBlur = 5;
        ctx.fillText(digit.digit, digit.x, digit.y);
        ctx.shadowBlur = 0;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      data-name="binary-background"
      data-file="components/ParticleBackground.js"
    />
  );
}
