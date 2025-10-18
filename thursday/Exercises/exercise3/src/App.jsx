import StateCard from "./components/StateCard";


function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <StateCard state="Kogi" capital="Lokoja" region="North-Central" population="8.3 million">
  Obajana
</StateCard>

<StateCard state="Oyo" capital="Ibadan" region="West" population="7.8 million">
  Cocoa House
</StateCard>

<StateCard state="Ogun" capital="Abeokuta" region="South-West" population="7.5 million">
  Olumo
</StateCard>

<StateCard state="Lagos" capital="Ikeja" region="South-West" population="8.9 million">
Ikeja
</StateCard>

    </div>
  );
}
export default App;
