
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Orbit({ radius, tube, rotation, speed, color }) {
  const orbit = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    orbit.current.rotation.x = rotation[0] + Math.sin(t * speed) * 0.12
    orbit.current.rotation.y = rotation[1] + t * speed * 0.25
    orbit.current.rotation.z = rotation[2] + Math.cos(t * speed) * 0.08
  })

  return (
    <mesh ref={orbit}>
      <torusGeometry args={[radius, tube, 16, 120]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.22}
        emissive={color}
        emissiveIntensity={0.35}
      />
    </mesh>
  )
}

function Core({ pointer }) {
  const group = useRef()
  const core = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.16 + pointer.current.x * 0.18,
      0.035,
    )

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(t * 0.3) * 0.12 + pointer.current.y * 0.12,
      0.035,
    )

    core.current.rotation.z = t * 0.2
  })

  return (
    <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={group} position={[1.7, 0, -0.5]} scale={1.05}>
        {/* Main metallic sculpture */}
        <mesh ref={core}>
          <torusKnotGeometry args={[0.72, 0.23, 220, 32, 2, 5]} />
          <meshPhysicalMaterial
            color="#b9b9b9"
            metalness={0.95}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#ff6500"
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* Orange orbital rings */}
        <Orbit
          radius={1.35}
          tube={0.018}
          rotation={[0.8, 0.3, 0.5]}
          speed={0.5}
          color="#ff6500"
        />

        <Orbit
          radius={1.55}
          tube={0.012}
          rotation={[1.2, 0.8, 0.2]}
          speed={-0.35}
          color="#b5b5b5"
        />

        <Orbit
          radius={1.1}
          tube={0.025}
          rotation={[0.2, 1.1, 1.3]}
          speed={0.4}
          color="#ff8a24"
        />

        {/* Floating metallic particles */}
        <mesh position={[1.45, 0.7, 0.1]}>
          <sphereGeometry args={[0.055, 24, 24]} />
          <meshStandardMaterial
            color="#ff7518"
            metalness={0.8}
            emissive="#ff6500"
            emissiveIntensity={2}
          />
        </mesh>

        <mesh position={[-1.3, -0.8, 0.2]}>
          <sphereGeometry args={[0.04, 24, 24]} />
          <meshStandardMaterial
            color="#d0d0d0"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        <pointLight position={[0, 0, 1.8]} color="#ff6500" intensity={5} distance={5} />
      </group>
    </Float>
  )
}

export default function HeroScene({ pointer }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 22]} />

      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 5]} intensity={18} color="#ff6a00" />
      <pointLight position={[-4, 2, 3]} intensity={10} color="#d0d0d0" />
      <directionalLight position={[0, 5, 4]} intensity={2} color="#ffffff" />

      <Stars
        radius={45}
        depth={25}
        count={250}
        factor={1.5}
        saturation={0}
        fade
        speed={0.2}
      />

      <Core pointer={pointer} />
    </Canvas>
  )
}
