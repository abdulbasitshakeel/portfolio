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
      meshRef.current.rotation.x += 0.0002
      meshRef.current.rotation.y += 0.0004
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[2.2, 64, 64]} ref={meshRef} scale={1}>
        <MeshDistortMaterial
          color="#6b5aaa"
          distort={0.3}
          speed={1.5}
          roughness={0.5}
          metalness={0.5}
        />
      </Sphere>
      
      {/* Ambient light for soft illumination */}
      <ambientLight intensity={0.6} color="#ffffff" />
      
      {/* Directional light with warm tone */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#e8e2f5"
      />
      
      {/* Point light for accent */}
      <pointLight
        position={[-5, -5, 5]}
        intensity={0.6}
        color="#4a3f7f"
      />
      
      {/* Fill light */}
      <pointLight
        position={[0, -5, -3]}
        intensity={0.4}
        color="#a8a0c8"
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
        size={0.12}
        color="#4a3f7f"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  )
}

export function HeroScene() {
  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #faf8f5 0%, #f0ebe5 50%, #e8e2f5 100%)' }}>
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <AnimatedSphere />
        <ParticleField />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-3">
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl md:text-7xl lg:text-8xl font-bold" style={{ color: '#1a1816', letterSpacing: '-0.5px' }}>
              Abdul Basit
            </h1>
            <p className="text-base md:text-lg font-medium tracking-widest uppercase" style={{ color: '#6b6860', letterSpacing: '2px' }}>
              Frontend Developer
            </p>
          </div>
          <div className="w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-purple-400" />
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#6b6860', maxWidth: '500px' }}>
            Designing and building beautiful, interactive web experiences with modern technologies and creative problem-solving
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6" style={{ color: '#4a3f7f' }}
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
