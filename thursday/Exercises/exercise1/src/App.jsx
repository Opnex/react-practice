import './App.css';
import GreetingCard from "./components/greeting";

function App() {
  return (
    <div className="App">
      <GreetingCard 
      name="Thomas Opeyemi Stephen Opnex"
      message="Enjoy your weekend"
      color="darkcyan"/>

      <GreetingCard 
      name="Anuoluwa Ayomide Badmus"
      message="Have a lovely day"
      color="grey"/>

      <GreetingCard 
      name="Ololade Fikayomi Ibukunoluwa"
      message="You are an amazing person "
      color="purple"/>
    </div>
  )
}

export default App;