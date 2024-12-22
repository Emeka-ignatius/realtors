'use client'
import Image from 'next/image'
import React from 'react'
// import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
// import { Box, Environment } from '@react-three/drei'

// function House({ progress }: { progress: number }) {
//   return (
//     <Box args={[1, 1, 1]} scale={[1, progress, 1]}>
//       <meshStandardMaterial color="white" />
//     </Box>
//   )
// }

export default function WelcomeAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(1)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-[50vh] w-full">


      <Image
      width={100}
      height={100}
      alt=''
      src='/images/I modern house.jpg'
      className='bg-cover '
      />
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <House progress={progress} />
        <Environment preset="city" />
      </Canvas> */}
    </div>
  )
}

