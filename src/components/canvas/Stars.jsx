import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Stars = () => {
  const pointsRef = useRef();

  // Generate random star positions within a sphere
  const starPositions = useMemo(() => {
    const positions = new Float32Array(3000); // Adjust the number of stars here

    for (let i = 0; i < positions.length; i += 3) {
      const r = 10; // Radius of the sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02} // Adjusted size for better performance
        color="#ffffff"
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </points>
  );
};

export default Stars;
