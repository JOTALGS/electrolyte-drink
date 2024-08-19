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
sceneContainer: {
    width: '50%',
    height: '100%',
    float: 'left',
    position: 'relative',
    },
    canvas: {
    width: '100%',
    height: '100%',
    },
};
export default Scene;
