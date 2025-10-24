import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  // 1️⃣ State for red, green, blue
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(50);

  // 2️⃣ Create helper function to convert RGB → HEX
  function rgbToHex(r, g, b) {
    const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  // 3️⃣ Compute the current hex color
  const hex = rgbToHex(red, green, blue);

  // 4️⃣ Inline style for color preview
  const colorBoxStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };

  // 5️⃣ Copy hex code to clipboard
  function copyHex() {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex} to clipboard!`);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎨 Color Picker</h2>

      <RGBSlider label="Red" value={red} onChange={setRed} color="#ff4d4d" />
      <RGBSlider label="Green" value={green} onChange={setGreen} color="#4caf50" />
      <RGBSlider label="Blue" value={blue} onChange={setBlue} color="#2196f3" />

      <ColorDisplay
        red={red}
        green={green}
        blue={blue}
        hex={hex}
        colorBoxStyle={colorBoxStyle}
        onCopyHex={copyHex}
      />
    </div>
  );
}

export default ColorPicker;
