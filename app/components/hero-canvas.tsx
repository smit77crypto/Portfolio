"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Text3D, Environment } from "@react-three/drei"
import { useTheme } from "next-themes"
import type * as THREE from "three"
import { MotionConfig } from "framer-motion"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 200]} scale={viewport.width / 4} ref={meshRef}>
        <MeshDistortMaterial
          color={theme === "dark" ? "#8b5cf6" : "#a78bfa"}
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.4}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  )
}

function FloatingText() {
  const { viewport } = useThree()
  const { theme } = useTheme()

  const skills = [
    { text: "HTML", position: [-2, 2, -2], scale: 0.2 },
    { text: "CSS", position: [2, -1, -3], scale: 0.2 },
    { text: "JS", position: [3, 1, -4], scale: 0.2 },
    { text: "PHP", position: [-3, -2, -3], scale: 0.2 },
    { text: "React", position: [1, 3, -5], scale: 0.2 },
    { text: "Node", position: [-1, -3, -4], scale: 0.2 },
  ]

  return (
    <>
      {skills.map((skill, index) => (
        <Float key={index} speed={1} rotationIntensity={0.5} floatIntensity={2} position={skill.position}>
          <Text3D font="/fonts/Inter_Bold.json" size={skill.scale} height={0.05} curveSegments={12}>
            {skill.text}
            <meshStandardMaterial
              color={theme === "dark" ? "#c4b5fd" : "#8b5cf6"}
              emissive={theme === "dark" ? "#4c1d95" : "#c4b5fd"}
              emissiveIntensity={0.5}
            />
          </Text3D>
        </Float>
      ))}
    </>
  )
}

export default function HeroCanvas() {
  const { theme } = useTheme()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <color attach="background" args={[theme === "dark" ? "#09090b" : "#ffffff"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />

      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.001,
        }}
      >
        <AnimatedSphere />
        <FloatingText />
      </MotionConfig>

      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />

      <Environment preset="city" />
    </Canvas>
  )
}

