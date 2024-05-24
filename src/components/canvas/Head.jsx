import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Head = () => {
  const groupRef = useRef(new THREE.Group());
  const headRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Loading head model...");
    const loader = new GLTFLoader();
    const modelURL = "/head/untitled.gltf"; // Ensure this URL is correct and accessible

    loader.load(
      modelURL,
      (gltf) => {
        console.log("Head model loaded successfully:", gltf);
        const head = gltf.scene;

        // Adjust the model's initial scale, position, and rotation
        head.scale.set(170, 170, 170); // Increase the scale
        head.position.set(0, 0, 0); // Adjust the position if necessary
        head.rotation.set(0, 0, 0); // Adjust the rotation if necessary

        headRef.current = head;
        // Add the head to the reference
        groupRef.current.add(head);

        console.log("Head object:", head);
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the GLTF model:", error);
      }
    );

    const handleMouseMove = (event) => {
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (headRef.current) {
      // Limit the rotation range to keep the face visible
      const maxRotationX = Math.PI / 6; // Limit rotation to 30 degrees
      const maxRotationY = Math.PI / 6; // Limit rotation to 30 degrees

      headRef.current.rotation.y = THREE.MathUtils.clamp(mousePos.current.x * maxRotationY, -maxRotationY, maxRotationY);
      headRef.current.rotation.x = THREE.MathUtils.clamp(-mousePos.current.y * maxRotationX, -maxRotationX, maxRotationX); // Invert the Y-axis rotation
    }
  });

  return <primitive object={groupRef.current} />;
};

export default Head;
