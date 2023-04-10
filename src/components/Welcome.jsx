import { useState } from "react";

export const Welcome = () => {
  const [fontsize, setFontsize] = useState(18);

  const increasefont = () => {
    setFontsize((fontSize) => fontSize + 1);
  };
  const decrementfont = () => {
    setFontsize((fontSize) => (fontSize > 18 ? fontSize - 1 : 18));
  };
  return (
    <div>
      <h2 style={{ fontSize: `${fontsize}px` }}>Welcome</h2>
      <button onClick={increasefont}>+</button>

      <button onClick={decrementfont}>-</button>
    </div>
  );
};
