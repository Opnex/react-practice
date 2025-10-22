import { useState } from "react";
import CitySelector from "./CitySelector";
import CityDisplay from "./CityDisplay";

function Parent() {
  const [selectedCity, setSelectedCity] = useState('Lagos');
  
  return (
    <div>
      <CitySelector 
        selectedCity={selectedCity} 
        onSelectCity={setSelectedCity} 
      />
      <CityDisplay city={selectedCity} />
    </div>
  );
}

export default Parent;
