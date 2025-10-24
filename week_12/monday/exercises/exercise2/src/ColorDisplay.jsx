import styles from './ColorPicker.module.css';

function ColorDisplay({ red, green, blue, hex, colorBoxStyle, onCopyHex }) {
  return (
    <div className={styles.colorDisplay}>
      <div className={styles.colorInfo}>
        <strong>RGB:</strong>
        <span className={styles.rgbValue}>
          {red}, {green}, {blue}
        </span>
      </div>
      <div className={styles.colorInfo}>
        <strong>HEX:</strong>
        <span className={styles.hexValue}>{hex}</span>
      </div>

      <div className={styles.colorBox} style={colorBoxStyle}></div>

      <button className={styles.copyButton} onClick={onCopyHex}>
        Copy Hex Code
      </button>
    </div>
  );
}

export default ColorDisplay;
