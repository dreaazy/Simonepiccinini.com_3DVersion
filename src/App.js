import logo from "./logo.svg";
import "./App.css";

import { PlanetScene, HeadScene, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <div
        className="App"
        style={{ position: "relative", width: "50vw", height: "50vh" }}
      >
        <PlanetScene />
      </div>

      
        <HeadScene />
      
    </>
  );
}

export default App;
