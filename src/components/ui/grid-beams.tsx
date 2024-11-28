"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Beam {
  start: { x: number; y: number };
  end: { x: number; y: number };
  progress: number;
  speed: number;
  maxLength: number;
  isHorizontal: boolean;
}

export const GridBeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const gridSize = 30;
  const maxBeams = 5;
  const beamAddProbability = 0.06;

  // Memoize dimension update to prevent unnecessary re-renders
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  }, []);

  // Consolidate resize and dimension logic
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      // Cancel animation frame on unmount
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateDimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);
    const beams: Beam[] = [];

    const addBeam = () => {
      if (beams.length >= maxBeams) return;

      const isHorizontal = Math.random() < 0.5;
      let start, end;

      if (isHorizontal) {
        const y = Math.floor(Math.random() * (rows + 1)) * gridSize;
        start = { x: 0, y };
        end = { x: canvas.width, y };
      } else {
        const x = Math.floor(Math.random() * (cols + 1)) * gridSize;
        start = { x, y: 0 };
        end = { x, y: canvas.height };
      }

      beams.push({
        start,
        end,
        progress: 0,
        speed: 0.003 + Math.random() * 0.007,
        maxLength: 0.3 + Math.random() * 0.4,
        isHorizontal,
      });
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let i = 0; i <= rows; i++) {
        const y = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      // Update and draw beams with optimized logic
      for (let i = beams.length - 1; i >= 0; i--) {
        const beam = beams[i];
        beam.progress += beam.speed;

        if (beam.progress >= 1 + beam.maxLength) {
          beams.splice(i, 1);
          continue;
        }

        const startProgress = Math.max(0, beam.progress - beam.maxLength);
        const endProgress = Math.min(1, beam.progress);

        const startX =
          beam.start.x + (beam.end.x - beam.start.x) * startProgress;
        const startY =
          beam.start.y + (beam.end.y - beam.start.y) * startProgress;
        const endX = beam.start.x + (beam.end.x - beam.start.x) * endProgress;
        const endY = beam.start.y + (beam.end.y - beam.start.y) * endProgress;

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, "rgba(151,152,154, 0.3)");
        gradient.addColorStop(0.5, "rgba(151,152,154, 0.7)");
        gradient.addColorStop(1, "rgba(151,152,154, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Probabilistic beam addition
      if (Math.random() < beamAddProbability) addBeam();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen  overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: "screen" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join the waitlist
        </h1>
        <p className="text-sm md:text-lg text-gray-400 max-w-xs md:max-w-2xl mx-auto px-4">
          Welcome to our platform. The best service on the web. We provide
          reliable, scalable, and customizable solutions for your business.
        </p>
      </div>
    </div>
  );
};

export default GridBeams;
