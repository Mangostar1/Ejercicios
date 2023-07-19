import React, { useRef, useState, useEffect } from "react";

export default function Snake() {
  const lienzo = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [size, setSize] = useState(20);
  const [lastPosition, setLastPosition] = useState([
    {
      x: undefined,
      y: undefined,
    },
  ]);
  const [isCtxReady, setIsCtxReady] = useState(false); // Nuevo estado para controlar la disponibilidad del contexto

  useEffect(() => {
    const canvas = lienzo.current;
    const context = canvas.getContext("2d");
    setCtx(context);
    setIsCtxReady(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setLastPosition([...lastPosition, { x, y }]);
        setY((prevY) => (prevY < 0 ? (prevY = 380) : prevY - 10));
      } else if (event.key === "ArrowDown") {
        setLastPosition([...lastPosition, { x, y }]);
        setY((prevY) => (prevY > 380 ? (prevY = 0) : prevY + 10));
      } else if (event.key === "ArrowLeft") {
        setLastPosition([...lastPosition, { x, y }]);
        setX((prevX) => (prevX < 0 ? (prevX = 380) : prevX - 10));
      } else if (event.key === "ArrowRight") {
        setLastPosition([...lastPosition, { x, y }]);
        setX((prevX) => (prevX > 380 ? (prevX = 0) : prevX + 10));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [x, y, lastPosition]);

  useEffect(() => {
    if (isCtxReady) {
      const drawSquare = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, size, size);
      };

      drawSquare();
    }
  }, [ctx, x, y, isCtxReady]);

  return (
    <div className="">
      <canvas
        ref={lienzo}
        id="lienzo"
        width="400"
        height="400"
        className="border-solid border-black border"
      ></canvas>
    </div>
  );
}
