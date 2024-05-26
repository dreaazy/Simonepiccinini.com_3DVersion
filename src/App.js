import { Routes, Route } from "react-router-dom";
import "./App.css";

import {
  PlanetScene,
  HeadScene,
  Navbar,
  Hero,
  Tech,
  Contact,
  Experience,
  TopicDetail,
  StarsCanvas
} from "./components";

import { Pcto, Program, Projects, ErrorPage } from "./pages";

import ProjectDetail from "./components/ProjectDetail"; // Import the ProjectDetail component

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
              {/* <Experience /> */}
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

        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        />

        <Route path="/projects/:projectName" element={<ProjectDetail />} />

        <Route
          path="/program/:type/:title"
          element={
            <>
              <TopicDetail />
            </>
          }
        />

        <Route
          path="*"
          element={<ErrorPage errorCode="404" errorMessage="Page Not Found" />}
        />
      </Routes>

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

    </div>
  );
}

export default App;
