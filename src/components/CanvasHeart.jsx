import React, { useEffect, useRef } from "react";

function hslToRgba(h, s, l, a) {
  h /= 360; s /= 100; l /= 100;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}

export default function CanvasHeart({ onComplete }) {
  const canvasRef = useRef(null);
  const bloomingDone = useRef(false);

  const target = new Date("2025-05-09T07:30:00Z");
  const getCountdown = () => {
    const now = new Date();
    const diff = target - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0
      ? `${days} day${days > 1 ? "s" : ""} to go 💍`
      : "Today is the day 💖";
  };

  const getHeartPoint = (angle, cx, cy) => {
    const t = angle / Math.PI;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: cx + x * 13, y: cy - y * 13 };
  };

  class Vector {
    constructor(x, y) { this.x = x; this.y = y; }
    rotate(theta) {
      const cos = Math.cos(theta), sin = Math.sin(theta);
      const x = this.x * cos - this.y * sin;
      const y = this.x * sin + this.y * cos;
      this.x = x; this.y = y;
      return this;
    }
    mult(f) { this.x *= f; this.y *= f; return this; }
    clone() { return new Vector(this.x, this.y); }
  }

  class Petal {
    constructor(a, b, start, angle, grow, bloom) {
      this.stretchA = a;
      this.stretchB = b;
      this.startAngle = start;
      this.angle = angle;
      this.growFactor = grow;
      this.bloom = bloom;
      this.radius = 1;
      this.finished = false;
      this.opacity = 0;
    }
    draw(ctx) {
      const v1 = new Vector(0, this.radius).rotate(this.startAngle);
      const v2 = v1.clone().rotate(this.angle);
      const v3 = v1.clone().mult(this.stretchA);
      const v4 = v2.clone().mult(this.stretchB);

      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
      ctx.closePath();

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
      const color = hslToRgba(this.bloom.hue, 80, 65, this.opacity);
      gradient.addColorStop(0, hslToRgba(this.bloom.hue, 100, 90, 0.9));
      gradient.addColorStop(0.5, color);
      gradient.addColorStop(1, hslToRgba(this.bloom.hue, 80, 65, 0));

      ctx.fillStyle = gradient;
      ctx.fill();
    }
    render(ctx) {
      if (this.radius <= this.bloom.radius) {
        this.radius += this.growFactor;
        this.opacity = Math.min(1, this.radius / this.bloom.radius);
        this.draw(ctx);
      } else {
        this.finished = true;
        this.draw(ctx);
      }
    }
  }

  class Bloom {
    constructor(x, y, radius, petalCount, hue, ctx) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.petalCount = petalCount;
      this.ctx = ctx;
      this.hue = hue;
      this.petals = [];
      this.init();
    }

    init() {
      const angle = Math.PI * 2 / this.petalCount;
      for (let i = 0; i < this.petalCount; i++) {
        const startAngle = i * angle;
        const petal = new Petal(
          Math.random() * 0.15 + 0.1,
          Math.random() * 0.25 + 0.2,
          startAngle,
          angle,
          Math.random() * 0.15 + 0.08,
          this
        );
        this.petals.push(petal);
      }
    }

    draw() {
      this.ctx.save();
      this.ctx.translate(this.x, this.y);
      this.ctx.shadowBlur = 30;
      this.ctx.shadowColor = hslToRgba(this.hue, 100, 85, 0.8);
      this.ctx.globalAlpha = 0.95;
      this.petals.forEach(p => p.render(this.ctx));
      this.ctx.restore();
    }

    isDone() {
      return this.petals.every(p => p.finished);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const blooms = [];
    const heartPoints = [];
    let angle = 0;

    ctx.globalCompositeOperation = "lighter";

    const drawLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blooms.forEach(b => b.draw());

      if (angle < Math.PI * 2 * 4) {
        const p = getHeartPoint(angle, cx, cy);
        const tooClose = heartPoints.some(o => {
          const dx = o.x - p.x, dy = o.y - p.y;
          return dx * dx + dy * dy < 250;
        });
        if (!tooClose) {
          heartPoints.push(p);
          const hue = 320 + Math.random() * 40;
          blooms.push(new Bloom(p.x, p.y, 10, 6, hue, ctx));
        }
        angle += 0.3;
      } else if (!bloomingDone.current) {
        bloomingDone.current = true;
        if (onComplete) onComplete(); // 💥 Notify App
      }

      if (bloomingDone.current) {
        ctx.save();
        ctx.fillStyle = "#444";
        ctx.font = "bold 32px 'Courier New'";
        ctx.textAlign = "center";
        ctx.fillText(getCountdown(), cx, cy - 10);

        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#ff3e6c";
        ctx.fillText("Engaged to be soon 💍", cx, cy + 30);
        ctx.restore();
      }

      requestAnimationFrame(drawLoop);
    };

    drawLoop();
  }, []);
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-xl shadow-2xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
  

  }
