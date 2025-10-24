import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import styles from "./Temperature.module.css";

function TemperatureApp() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    function handleCelsiusChange(value) {
        setScale("c");
        setTemperature(value);
    }

    function handleFahrenheitChange(value) {
        setScale("f");
        setTemperature(value);
    }

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    const celsius = scale === "f" ? toCelsius(parseFloat(temperature)) : temperature;
    const fahrenheit = scale === "c" ? toFahrenheit(parseFloat(temperature)) : temperature;
    
    return (
        <div className={styles.converterContainer}>
            <h2 className={styles.title}>Temperature Converter</h2>
            <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
            <FahrenheitInput value={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
        </div>
    );
}

export default TemperatureApp