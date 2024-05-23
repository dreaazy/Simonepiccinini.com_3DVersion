import React, { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Head = () => {
  const groupRef = useRef();

  useEffect(() => {
    console.log("Loading head model...");
    const loader = new GLTFLoader();
    const modelURL = "/head/head.gltf"; // Replace with the actual URL of your GLTF model

    // Load the GLTF model using the URL
    loader.load(
      modelURL,
      (gltf) => {
        console.log("Head model loaded successfully:", gltf);
        const head = gltf.scene;

        // Set the model's initial scale, position, and rotation
        head.scale.set(1, 1, 1); // Adjust the scale if necessary
        head.position.set(0, 0, 0);
        head.rotation.set(0, 0, 0);

        // Add the head to the reference
        groupRef.current.add(head);
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the GLTF model:", error);
      }
    );
  }, []);

  return <group ref={groupRef}></group>;
};

export default Head;
