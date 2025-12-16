import { useState } from "react";
import PixelGrid from "./PixelGrid";
import Selector from "./Selector";

const PixelContainer = (): React.ReactNode => {
  const [color, setColor] = useState<string>("#ffffff");
  const [grid, setGrid] = useState<number>(0);

  return (
    <div className="mainContainer">
      <Selector
        color={color}
        grid={grid}
        setColor={setColor}
        setGrid={setGrid}
      />
      <PixelGrid selectedColor={color} gridSize={grid} />
    </div>
  );
};

export default PixelContainer;
