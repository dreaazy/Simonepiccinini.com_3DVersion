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
  StarsCanvas,
  Header
} from "./components";

import { Pcto, Program, Projects, ErrorPage, About, Civica } from "./pages";

import ProjectDetail from "./components/ProjectDetail"; // Import the ProjectDetail component

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <Header/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              
              <About />
            </>
          }
        />

        <Route
          path="/pcto"
          element={
            <>
              <Pcto />
            </>
          }
        />

        <Route
          path="/civica"
          element={
            <>
              <Civica />
            </>
          }
        />

        <Route path="/program" element={<Program />} />

        <Route path="/projects" element={<Projects />} />

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
