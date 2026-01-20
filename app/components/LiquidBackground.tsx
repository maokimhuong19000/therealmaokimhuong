"use client";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import React from "react";

// Shader Material
const LiquidMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color("#7f5af0") },
  // Vertex shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
  `,
  // Fragment shader
  `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;

  float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453123);
  }

  void main() {
    vec2 uv = vUv;
    float wave = sin(uv.x * 10.0 + uTime) * cos(uv.y * 10.0 + uTime);
    float n = random(uv + wave * 0.5);
    vec3 color = mix(uColor, vec3(0.05,0.05,0.05), n*0.5);
    gl_FragColor = vec4(color,1.0);
  }
  `
);

extend({ LiquidMaterial });

function LiquidPlane() {
  const matRef = useRef<any>(null!);
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uTime = clock.elapsedTime;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      {/* @ts-ignore */}
      <liquidMaterial ref={matRef} uColor={new THREE.Color("#5A9690")} />
    </mesh>
  );
}

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 100 }}>
        <ambientLight intensity={0.5} />
        <LiquidPlane />
      </Canvas>
    </div>
  );
}



/**
 * Add a fullscreen video background behind the canvas.
 * Place this after the component code.
 */


export function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover -z-50 pointer-events-none"
      style={{ objectFit: "cover" }}
    >
      <source src="/assets/video/b2g.mp4" type="video/mp4" />
    </video>
  );
}
/**
 * Animated Birds Overlay
 * Add this after the VideoBackground export.
 */


export function BirdsOverlay() {
  return (
<>
  {Array.from({ length: 12 }).map((_, i) => (
    <div
      key={i}
      className="bird-container"
      style={{
        top: `${Math.random() * 60 + 5}%`,
        animationDuration: `${12 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * -20}s`,
        transform: `scale(${0.3 + Math.random() * 0.4})`,
      }}
    >
      <div
        className="bird"
        style={{
          animationDuration: `${0.8 + Math.random() * 0.6}s`,
        }}
      />
    </div>
  ))}

  <style jsx global>{`
    .bird {
      background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg');
      background-size: auto 100%;
      width: 88px;
      height: 125px;
      filter: brightness(0) invert(1);
      animation-name: fly-cycle;
      animation-timing-function: steps(10);
      animation-iteration-count: infinite;
    }

    .bird-container {
      position: absolute;
      left: -15%;
      pointer-events: none;
      z-index: 10;
      animation-name: fly-right;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      will-change: transform;
    }

    @keyframes fly-cycle {
      100% {
        background-position: -900px 0;
      }
    }

    @keyframes fly-right {
      0% {
        transform: translateX(-20vw);
      }
      100% {
        transform: translateX(120vw);
      }
    }
  `}</style>
</>

  );
}