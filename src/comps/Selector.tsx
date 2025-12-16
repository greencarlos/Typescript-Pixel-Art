const Selector = ({ color, grid, setColor, setGrid }): React.ReactNode => {
  return (
    <div className="selector">
      <select
        name="grid"
        id="grid"
        value={grid}
        onChange={(e) => setGrid(Number(e.target.value))}
      >
        {[8, 16, 24, 32].map((size) => (
          <option value={size} key={size}>
            {size} x {size}
          </option>
        ))}
      </select>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default Selector;
