import StateCard from "./components/StateCard";


function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <StateCard state="Kaduna" capital="Kaduna" region="North" population="8.3 million">
  Kajuru Castle
</StateCard>

<StateCard state="Oyo" capital="Ibadan" region="West" population="7.8 million">
  Cocoa House
</StateCard>

<StateCard state="Anambra" capital="Awka" region="East" population="5.5 million">
  Ogbunike Caves
</StateCard>

<StateCard state="Cross River" capital="Calabar" region="South" population="3.9 million">
  Obudu Mountain Resort
</StateCard>

    </div>
  );
}
export default App;
