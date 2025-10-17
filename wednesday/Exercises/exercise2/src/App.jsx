import Profile from "./components/profile";
import Opnex from "./assets/images/opnex.jpg";
import Iremide from "./assets/images/ire.jpg";

function App() {
  return (
    <div>
      <Profile
        image={Opnex}
        name="Thomas Opeyemi Stephen"
        role="Front-end Developer"
        bio="Passionate about creating a responsive website"
      />

      <Profile
        image={Iremide}
        name="Adediwura Iremide Ireayotomiwa"
        role="Back-end Developer"
        bio="Passionate about creating making a front end works with back end effectivelly"
      />
    </div>
  )
}

export default App;