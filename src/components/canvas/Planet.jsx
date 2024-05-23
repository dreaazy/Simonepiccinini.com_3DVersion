import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Planet = () => {
  const planetRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/planet/scene.gltf",
      (gltf) => {
        const planet = gltf.scene;
        planetRef.current.add(planet);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
          "/textures/texture.jpg",
          (texture) => {
            planet.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material.map = texture;
              }
            });
          },
          undefined,
          (error) => {
            console.error("An error occurred loading the texture:", error);
          }
        );
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the GLTF model:", error);
      }
    );
  }, []);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return <group ref={planetRef}></group>;
};

export default Planet;
