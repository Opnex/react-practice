import styles from './Temperature.module.css';

function FahrenheitInput({ value, onTemperatureChange }) {
    return (
        <div className={`${styles.inputContainer} ${styles.fahrenheit}`}>
            <label className={styles.label}>
                Fahrenheit
            </label>
            <input
                className={styles.input}
                type="number"
                value={value}
                onChange={(e) => onTemperatureChange(e.target.value)}
                placeholder="Enter temperature in Fahrenheit"
            />
        </div>
    );
}

export default FahrenheitInput