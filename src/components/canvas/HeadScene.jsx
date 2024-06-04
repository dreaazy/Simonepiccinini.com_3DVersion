import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";


const Head = ({ isMobile }) => {
  
  const groupRef = useRef(new THREE.Group());
  const headRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {

    const loader = new GLTFLoader();
    const modelURL = "/headFinal/untitled.gltf"; // Ensure this URL is correct and accessible

    loader.load(
      modelURL,
      (gltf) => {
        console.log("Head model loaded successfully:", gltf);
        const head = gltf.scene;

        // Adjust the model's initial scale, position, and rotation
        head.scale.set(0, 0, 0); // Increase the scale
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

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="lightblue" />
      <spotLight
        position={[-30, 50, 30]}
        angle={0.9}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight position={[4, 0, 0]} intensity={7} color="softwhite" />

      <primitive
        object={groupRef.current}
        scale={isMobile ? 2.4 : 1}
        position={isMobile ? [0, 0, 0] : [0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const HeadScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />
        <Head isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeadScene;
