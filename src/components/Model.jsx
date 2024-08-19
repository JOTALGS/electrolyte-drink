import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Vector3 } from 'three';
import { TextureLoader } from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/lata_frizze_blue_evolution.glb');
  const canRef = useRef();
  const [dragging, setDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState(new Vector3());

  // Load textures directly in the component
  const textures = useTexture({
    'Pintura-1': '/images/texture1.jpg',
    'Pintura-2': '/images/texture2.jpg',
  });

  useEffect(() => {
    if (canRef.current) {
      // Apply new textures
      materials['Pintura-1'].map = textures['Pintura-1'];
      materials['Pintura-2'].map = textures['Pintura-2'];

      // Ensure textures are updated
      materials['Pintura-1'].needsUpdate = true;
      materials['Pintura-2'].needsUpdate = true;
    }
  }, [textures]);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setDragging(true);
      setLastPosition(new Vector3(event.clientX, event.clientY, 0));
    };

    const handleMouseMove = (event) => {
      if (dragging) {
        const deltaX = event.clientX - lastPosition.x;
        const deltaY = event.clientY - lastPosition.y;
        const deltaZ = event.clientZ - lastPosition.z;
        if (canRef.current) {
          canRef.current.rotation.x += deltaY * 0.01;
          canRef.current.rotation.z -= deltaX * 0.01;
        }
        setLastPosition(new Vector3(event.clientX, event.clientY, 0));
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, lastPosition]);

  return (
    <group {...props} dispose={null}>
      <group
        ref={canRef}
        position={[0.006, -30.696, -400]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={87.749}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Lata_Pintura-1_0'].geometry}
          material={materials['Pintura-1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lata_Metal_0.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Lata_Pintura-2_0'].geometry}
          material={materials['Pintura-2']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Remache_Metal_0.geometry}
        material={materials.Metal}
        position={[0, -30.102, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-6.413, 6.413, 6.413]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Destapador_Metal_0.geometry}
        material={materials.Metal}
        position={[13.267, -30.652, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
    </group>
  );
}