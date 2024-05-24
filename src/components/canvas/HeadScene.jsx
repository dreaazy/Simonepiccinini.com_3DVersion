import React from "react";
import { Canvas } from "@react-three/fiber";
import Head from "./Head";

const HeadScene = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 75 }} // Adjust the camera position
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Head />
      </Canvas>
    </div>
  );
};

export default HeadScene;
