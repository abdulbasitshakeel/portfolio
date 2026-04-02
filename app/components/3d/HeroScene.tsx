'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0003
      meshRef.current.rotation.y += 0.0005
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[2, 64, 64]} ref={meshRef} scale={1}>
        <MeshDistortMaterial
          color="#333366"
          distort={0.4}
          speed={2}
          roughness={0.4}
          metalness={0.6}
        />
      </Sphere>
      
      {/* Ambient light for soft illumination */}
      <ambientLight intensity={0.5} color="#ffffff" />
      
      {/* Directional light for modeling */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        color="#6666CC"
      />
      
      {/* Point light for accent */}
      <pointLight
        position={[-5, -5, 5]}
        intensity={0.5}
        color="#E8E8F5"
      />
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const geometryRef = useRef<THREE.BufferGeometry>(null)
  const { viewport } = useThree()

  useEffect(() => {
    if (!particlesRef.current || !geometryRef.current) return

    const particleCount = 150
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * viewport.width * 2
      positions[i + 1] = (Math.random() - 0.5) * viewport.height * 2
      positions[i + 2] = (Math.random() - 0.5) * 30
    }

    geometryRef.current.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
  }, [viewport])

  useFrame(() => {
    if (geometryRef.current && geometryRef.current.attributes.position) {
      const positions = geometryRef.current.attributes.position.array as Float32Array
      for (let i = 2; i < positions.length; i += 3) {
        positions[i] -= 0.02
        if (positions[i] < -15) {
          positions[i] = 15
        }
      }
      geometryRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        size={0.15}
        color="#6666CC"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  )
}

export function HeroScene() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-bg-primary via-bg-primary to-accent-light">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <AnimatedSphere />
        <ParticleField />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={4}
        />
      </Canvas>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center space-y-6 animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold text-text-primary">
            Abdul Basit
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light tracking-widest">
            FRONTEND DEVELOPER
          </p>
          <div className="h-1 w-16 bg-accent-gradient mx-auto rounded-full" />
          <p className="text-text-secondary max-w-md mx-auto text-lg">
            Crafting Engaging User Interfaces and Seamless Web Experiences
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
