import React, { useEffect, useRef } from 'react';

const TwoSpheresBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let distanceFactor = 0.4; // Factor to control the distance between spheres

        let angle = 0; // Initial angle for rotation

        const sphere1 = {
        x: canvas.width * 0.85, // Confined to top-right
        y: canvas.height * 0.15,
        radius: Math.max(canvas.width, canvas.height) * 0.38, // Large enough to partially show
        color: 'rgba(0, 0, 0, 0.3)',
        };

        const sphere2 = {
        x: canvas.width * 0.15, // Confined to bottom-left
        y: canvas.height * 0.85,
        radius: Math.max(canvas.width, canvas.height) * 0.38, // Large enough to partially show
        color: 'rgba(0, 0, 0, 0.3)',
        };

        const drawSpheres = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the dynamic distance between the spheres based on scroll
        const distance = Math.max(100, 500 - window.scrollY * distanceFactor);

        sphere1.x = canvas.width * 0.85 + Math.cos(angle) * distance;
        sphere1.y = canvas.height * 0.15 + Math.sin(angle) * distance;

        sphere2.x = canvas.width * 0.15 - Math.cos(angle) * distance;
        sphere2.y = canvas.height * 0.85 - Math.sin(angle) * distance;

        // Draw Sphere 1 (gradient and shadow effect)
        const gradient1 = ctx.createRadialGradient(
            sphere1.x, sphere1.y, sphere1.radius * 0.6,
            sphere1.x, sphere1.y, sphere1.radius
        );

        gradient1.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); // White
        gradient1.addColorStop(0.5, 'rgba(113, 115, 212, 0.3)'); // Purple
        gradient1.addColorStop(1, 'rgba(139, 180, 223, 0.5)'); // Lavender (lighter and softer)



        ctx.beginPath();
        ctx.arc(sphere1.x, sphere1.y, sphere1.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient1;
        ctx.fill();

        // Draw Sphere 2 with metallic gradient and reflection
        const gradient2 = ctx.createRadialGradient(
        sphere2.x, sphere2.y, sphere2.radius * 0.6,
        sphere2.x, sphere2.y, sphere2.radius
        );
          gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.3)'); // #947CAC (soft metallic)
          gradient2.addColorStop(0.5, 'rgba(215, 103, 151, 0.3)'); // #A580A6 (metallic pink)
          gradient2.addColorStop(1, 'rgba(180, 58, 121, 0.5)'); // #D2C9D4 (very light metallic)
    

        ctx.beginPath();
        ctx.arc(sphere2.x, sphere2.y, sphere2.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient2;
        ctx.fill();

        // Increment the angle for rotation
        angle += 0.006; // Changes the speed rotation

        requestAnimationFrame(drawSpheres);
        };

        drawSpheres();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight
        };

        const handleScroll = () => {
            angle += window.scrollY * 0.000001; // Adjust rotation speed with scroll
            distanceFactor = Math.max(0.1, Math.min(0.3, window.scrollY / 1000)); // Adjust the distance factor based on scroll position
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <canvas
            id="ball-canvas"
            key="ball-canvas"
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: 'white',
            }}
        />
    );
    };

export default TwoSpheresBackground;
