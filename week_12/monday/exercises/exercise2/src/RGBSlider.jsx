import styles from './ColorPicker.module.css';

function RGBSlider({ label, value, onChange, color }) {
  const sliderStyle = {
    accentColor: color,
  };

  return (
    <div className={styles.sliderContainer}>
      <label className={styles.label}>
        {label}: {value}
      </label>
      <input
        className={styles.slider}
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={sliderStyle}
      />
    </div>
  );
}

export default RGBSlider;
 