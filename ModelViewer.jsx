import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import modelUrl from './src/public/models/tp-c2.glb?url'

function Model() {
  const { scene } = useGLTF(modelUrl)
  return <primitive object={scene} scale={1} />
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [10, 50, 50], fov: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
