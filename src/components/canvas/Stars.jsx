import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

const Stars = () => {
  const pointsRef = useRef();

  // Generate random star positions within a sphere
  const starPositions = new Float32Array(10000).map(() => (Math.random() - 0.5) * 10);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={starPositions}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export default Stars;
