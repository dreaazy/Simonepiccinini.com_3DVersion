import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Head = ({ isMobile }) => {
    const computer = useGLTF("./HeadNew/Head.gltf");

    return (
        <mesh>

            <hemisphereLight intensity={0.1} groundColor="black" />
            <spotLight
                position={[-20, 60, 20]} // Changed position to move it further away
                angle={0.5} // Increased angle to widen the light spread
                penumbra={0.5} // Reduced penumbra to soften the edge
                intensity={5} // Reduced intensity to make it less harsh
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight position={[-1, -1, 3]} intensity={5.5} /> 

            <primitive
                object={computer.scene}
                scale={isMobile ? 1.7 : 2}
                position={isMobile ? [0, 0, -2.2] : [4, 0, 0]}
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
            frameloop='demand'
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