import React from "react";
import { Canvas } from "@react-three/fiber";
import Head from "./Head";

const HeadScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Head />
    </Canvas>
  );
};

export default HeadScene;
