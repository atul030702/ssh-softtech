export class ParticleClass {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private particles: Particle[] = []
    private animationFrameId = 0
    private resizeHandler: () => void

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D context not available');
        this.ctx = ctx;

        this.resizeHandler = this.resizeCanvas.bind(this);
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeHandler);

        this.initParticles();
    };

    private isDarkMode() {
        return document.documentElement.classList.contains('dark');
    };

    private resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // create particles count to match new size:
        const count = Math.floor((this.canvas.width * this.canvas.height) / 18000);

        if (count !== this.particles.length) {
            this.initParticles(count);
        }
    };

    private initParticles(count = Math.floor((this.canvas.width * this.canvas.height) / 18000)) {
        this.particles = []
        for (let i = 0; i < count; i++) {
            // Particle needs the canvas size
            this.particles.push(new Particle(this.canvas));
        }
    };

    start() {
        if (this.animationFrameId) return;

        const loop = () => {
            this.drawFrame();
            this.animationFrameId = requestAnimationFrame(loop);
        };

        loop();
    };

    stop() {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = 0;
    }

    destroy() {
        this.stop();
        window.removeEventListener('resize', this.resizeHandler);
    };

    private drawFrame() {
        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.particles.forEach((p) => {
            // Particle update
            p.update(); 
        })

        // DRAW CONNECTIONS
        ctx.lineWidth = 0.5;
        const maxConnectionDistance = 150; // General connection distance

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxConnectionDistance) { 
                    const opacity = 1 - (distance / maxConnectionDistance); 
                    
                    // Set color based on theme and calculated opacity
                    ctx.strokeStyle = this.isDarkMode() 
                        ? `rgba(59, 130, 246, ${opacity * 0.25})` 
                        : `rgba(37, 99, 235, ${opacity * 0.2})`
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        // 3. DRAW PARTICLES
        this.particles.forEach((p) => {
            p.draw(ctx, this.isDarkMode());
        })
    }
};

/* Particle class */
class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
    private canvas: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        
        // Simple random initialization
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height; 
        
        this.size = Math.random() * 2 + 1.5;

        // Simple random drift speed
        this.speedX = (Math.random() - 0.5) * 0.5; 
        this.speedY = (Math.random() - 0.5) * 0.5;

        this.opacity = Math.random() * 0.5 + 0.2;
    };

    // Update method is simplified to only handle movement and boundaries
    update() { 
        // Movement and boundary logic
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around logic
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    };

    draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        // Use Tailwind blue colors
        const color = isDark ? '59, 130, 246' : '37, 99, 235'; 

        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
};