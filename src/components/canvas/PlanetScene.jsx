import React from "react";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import Stars from "./Stars";

const PlanetScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <Planet />
    </Canvas>
  );
};

export default PlanetScene;
