// export class ParticleClass {
//     private canvas: HTMLCanvasElement
//     private ctx: CanvasRenderingContext2D
//     private particles: Particle[] = []
//     private animationFrameId = 0
//     private resizeHandler: () => void
//     private handleMouseMoveBound: (e: MouseEvent) => void;
//     private handleMouseLeaveBound: () => void;

//     // New properties for mouse interaction
//     private mouseX = -1000; // Initialize off-screen
//     private mouseY = -1000;
//     private mouseRadius = 150; // Radius of influence for repulsion
//     private gridSize = 50; // Define grid size here

//     constructor(canvas: HTMLCanvasElement) {
//         this.canvas = canvas;
//         const ctx = canvas.getContext('2d');
//         if (!ctx) throw new Error('Canvas 2D context not available');
//         this.ctx = ctx;

//         this.resizeHandler = this.resizeCanvas.bind(this);
//         this.resizeCanvas();
//         window.addEventListener('resize', this.resizeHandler);

//         this.initParticles();

//         this.handleMouseMoveBound = this.handleMouseMove.bind(this);
//         this.handleMouseLeaveBound = this.handleMouseLeave.bind(this);

//         // ADD MOUSE LISTENERS
//         this.canvas.addEventListener('mousemove', this.handleMouseMoveBound);
//         this.canvas.addEventListener('mouseleave', this.handleMouseLeaveBound);
//     };

//     private isDarkMode() {
//         return document.documentElement.classList.contains('dark');
//     };

//     private resizeCanvas() {
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = window.innerHeight;

//         // re-create particles count to match new size:
//         const count = Math.floor((this.canvas.width * this.canvas.height) / 15000);

//         if (count !== this.particles.length) {
//             this.initParticles(count);
//         }
//     };

//     private initParticles(count = Math.floor((this.canvas.width * this.canvas.height) / 15000)) {
//         this.particles = []
//         for (let i = 0; i < count; i++) {
//             this.particles.push(new Particle(this.canvas));
//         }
//     };

//     // MOUSE HANDLERS
//     private handleMouseMove(e: MouseEvent) {
//         this.mouseX = e.clientX;
//         this.mouseY = e.clientY;
//     }

//     private handleMouseLeave() {
//         this.mouseX = -1000;
//         this.mouseY = -1000;
//     }

//     start() {
//         if (this.animationFrameId) return;

//         const loop = () => {
//             this.drawFrame();
//             this.animationFrameId = requestAnimationFrame(loop);
//         };

//         loop();
//     };

//     stop() {
//         if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
//         this.animationFrameId = 0;
//     }

//     destroy() {
//         this.stop();
//         window.removeEventListener('resize', this.resizeHandler);
//         // REMOVE MOUSE LISTENERS
//         this.canvas.removeEventListener('mousemove', this.handleMouseMoveBound);
//         this.canvas.removeEventListener('mouseleave', this.handleMouseLeaveBound);
//     };

//     private drawFrame() {
//         const ctx = this.ctx;
//         const canvas = this.canvas;

//         // Background gradient based on theme
//         const bgGradient = this.isDarkMode()
//         ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
//         : 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)';
//         canvas.style.background = bgGradient;

//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Grid
//         const gridColor = this.isDarkMode() ? 'rgba(59, 130, 246, 0.05)' : 'rgba(37, 99, 235, 0.03)';
//         ctx.strokeStyle = gridColor;
//         ctx.lineWidth = 1;
        
//         // Use class property for gridSize
//         const gridSize = this.gridSize;

//         for (let x = 0; x < canvas.width; x += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(x, 0);
//             ctx.lineTo(x, canvas.height);
//             ctx.stroke();
//         }
//         for (let y = 0; y < canvas.height; y += gridSize) {
//             ctx.beginPath();
//             ctx.moveTo(0, y);
//             ctx.lineTo(canvas.width, y);
//             ctx.stroke();
//         }
        
//         // *** GRID-SNAPPING LOGIC ***
//         let activeMouseX = this.mouseX;
//         let activeMouseY = this.mouseY;

//         if (activeMouseX !== -1000) {
//             // Snap mouse position to the center of the grid cell
//             activeMouseX = Math.floor(activeMouseX / gridSize) * gridSize + gridSize / 2;
//             activeMouseY = Math.floor(activeMouseY / gridSize) * gridSize + gridSize / 2;
//         }

//         // Particles
//         this.particles.forEach((p) => {
//             // Pass the snapped coordinates for grid-based repulsion
//             p.update(activeMouseX, activeMouseY, this.mouseRadius);
//             p.draw(ctx, this.isDarkMode());
//         })

//         // Connections
//         const connectionColor = this.isDarkMode() ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)';
//         ctx.strokeStyle = connectionColor;
//         ctx.lineWidth = 0.5;

//         for (let i = 0; i < this.particles.length; i++) {
//             for (let j = i + 1; j < this.particles.length; j++) {
//                 const dx = this.particles[i].x - this.particles[j].x;
//                 const dy = this.particles[i].y - this.particles[j].y;
//                 const distance = Math.sqrt(dx * dx + dy * dy);

//                 if (distance < 120) {
//                     ctx.beginPath();
//                     ctx.moveTo(this.particles[i].x, this.particles[i].y);
//                     ctx.lineTo(this.particles[j].x, this.particles[j].y);
//                     ctx.stroke();
//                 }
//             }
//         }
//     }
// };

/* Particle class */
// class Particle {
//     x: number
//     y: number
//     size: number
//     speedX: number
//     speedY: number
//     opacity: number
//     private canvas: HTMLCanvasElement
//     private originalSpeedX: number;
//     private originalSpeedY: number;


//     constructor(canvas: HTMLCanvasElement) {
//         this.canvas = canvas;

//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 0.5;

//         this.speedX = (Math.random() - 0.5) * 0.3;
//         this.speedY = (Math.random() - 0.5) * 0.3;

//         this.originalSpeedX = this.speedX; // Save original speed
//         this.originalSpeedY = this.speedY; // Save original speed

//         this.opacity = Math.random() * 0.5 + 0.2;
//     };

//     update(mouseX: number, mouseY: number, mouseRadius: number) {
//         const maxRepelSpeed = 3;

//         // Mouse Repulsion Logic
//         const dx = this.x - mouseX;
//         const dy = this.y - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < mouseRadius) {
//             // Calculate force: stronger closer to mouse, from 0 to 1
//             const force = (mouseRadius - distance) / mouseRadius;

//             // Normalize the direction vector
//             const forceDirectionX = dx / distance;
//             const forceDirectionY = dy / distance;

//             // Apply force, increasing speed away from the mouse
//             this.speedX += forceDirectionX * force * 0.5;
//             this.speedY += forceDirectionY * force * 0.5;

//             // Limit maximum speed
//             const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
//             if (currentSpeed > maxRepelSpeed) {
//                 this.speedX = (this.speedX / currentSpeed) * maxRepelSpeed;
//                 this.speedY = (this.speedY / currentSpeed) * maxRepelSpeed;
//             }
//         } else {
//             // Decay speed back towards the original speed for general drift
//             this.speedX += (this.originalSpeedX - this.speedX) * 0.05;
//             this.speedY += (this.originalSpeedY - this.speedY) * 0.05;
//         }

//         // Existing boundary and movement logic
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > this.canvas.width) this.x = 0;
//         if (this.x < 0) this.x = this.canvas.width;
//         if (this.y > this.canvas.height) this.y = 0;
//         if (this.y < 0) this.y = this.canvas.height;
//     };

//     draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
//         const color = isDark ? '59, 130, 246' : '37, 99, 235';

//         ctx.fillStyle = `rgba(${color}, ${this.opacity})`;

//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//     };
// };

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
        const count = Math.floor((this.canvas.width * this.canvas.height) / 15000);

        if (count !== this.particles.length) {
            this.initParticles(count);
        }
    };

    private initParticles(count = Math.floor((this.canvas.width * this.canvas.height) / 15000)) {
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

        // Background gradient based on theme
        const bgGradient = this.isDarkMode()
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        : 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)';
        canvas.style.background = bgGradient;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.particles.forEach((p) => {
            // Particle update
            p.update(); 
        })

        // DRAW CONNECTIONS
        ctx.lineWidth = 0.5;
        const maxConnectionDistance = 100; // General connection distance

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
        
        this.size = Math.random() * 2 + 0.5;

        // Simple random drift speed
        this.speedX = (Math.random() - 0.5) * 0.3; 
        this.speedY = (Math.random() - 0.5) * 0.3;

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