import { useState, useEffect } from "react";

const PixelGrid = ({ selectedColor, gridSize }): React.ReactNode => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [pixels, setPixels] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setPixels(Array(gridSize * gridSize).fill("#ffffff"));
  }, [gridSize]);

  const paintPixel = (index) => {
    setPixels((pixel) =>
      pixel.map((color, i) => (i === index ? selectedColor : color))
    );
  };

  const handleMouseDown = (index) => {
    setIsDrawing(true);
    paintPixel(index);
  };

  const handleMouseEnter = (index) => {
    if (isDrawing) paintPixel(index);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="pixelGrid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {pixels.map((color, index) => (
          <div
            className="pixel"
            style={{ backgroundColor: color }}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseDown={() => handleMouseDown(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PixelGrid;
