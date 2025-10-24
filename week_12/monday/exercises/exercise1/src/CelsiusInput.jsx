import styles from './Temperature.module.css';

function CelsiusInput({ value, onTemperatureChange }) {
    return (
        <div className={`${styles.inputContainer} ${styles.celsius}`}>
            <label className={styles.label}>
                Celsius
            </label>
            <input
                className={styles.input}
                type="number"
                value={value}
                onChange={(e) => onTemperatureChange(e.target.value)}
                placeholder="Enter temperature in Celsius"
            />
        </div>
    );
}

export default CelsiusInput