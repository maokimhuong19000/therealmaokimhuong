"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Particle field (unique style)
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const particles = Array.from({ length: 1000 }, () => ({
    position: [
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
    ],
    size: Math.random() * 0.1 + 0.05,
  }));

  useFrame(({ mouse }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005; // slow rotation
      pointsRef.current.rotation.x += 0.0003;
      pointsRef.current.position.x = mouse.x * 2; // parallax
      pointsRef.current.position.y = mouse.y * 2;
    }
  });

  return (
    <Points ref={pointsRef} positions={new Float32Array(particles.map(p => p.position).flat())} stride={3}>
      <PointMaterial
        vertexColors={false}
        color="#7f5af0"
        size={0.1}
        sizeAttenuation
      />
    </Points>
  );
}

// Dynamic center object
function DynamicKnot() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[2, 0.5, 200, 32]} />
      <meshStandardMaterial
        color="#ff5fa2"
        metalness={0.8}
        roughness={0.2}
        emissive="#ff5fa2"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Particle field */}
        <ParticleField />

        {/* Center dynamic object */}
        <DynamicKnot />
      </Canvas>
    </div>
  );
}
