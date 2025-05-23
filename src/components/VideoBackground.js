// src/components/VideoBackground.js
import React from 'react'
import heroBg from '../assets/hero-bg.mp4'

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: -10,
        }}
      >
        <source src={heroBg} type="video/mp4" />
        Your browser doesn’t support HTML5 video.
      </video>
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: -9,
        }}
      />
    </>
  )
}
