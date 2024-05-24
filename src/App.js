import { Routes, Route } from "react-router-dom";
import "./App.css";

import {
  PlanetScene,
  HeadScene,
  Navbar,
  Hero,
  Tech,
  Contact,
  Experience
} from "./components";


import { Pcto, Program } from "./pages";



function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              {/* Uncomment these components as needed */}
              {/* <About /> */}
              <Experience />
              {/*  <Tech />
              <Works />
              <Feedbacks /> */}
            </>
          }
        />

        {/* <Route
          path="/pcto"
          element={
            <>
              <Pcto />
            </>
          }
        /> */}

        <Route
          path="/program"
          element={
            <>
              <Program />
            </>
          }
        />
      </Routes>


      <Contact />

    </div>
  );
}

export default App;