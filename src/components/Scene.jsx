// src/components/Scene.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Scene = ({ style }) => {
    return (
    <div style={{ ...styles.canvasContainer, ...style }}>
      <Canvas style={styles.canvas}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
      </Canvas>
    </div>
  );
};


const styles = {
    canvasContainer: {
        width: '50%',
        height: '100vh', // Make the container full height
        margin: 0,
        padding: 0,
        overflow: 'hidden', // Ensure no scrollbars are added
      },
}
export default Scene;
