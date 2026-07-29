import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <section style={{ padding: 24 }}>
        <h2>About this animation</h2>
        <p>This demo uses anime.js to create a simple hero animation suitable for export to an animated GIF or SVG.</p>
      </section>
    </main>
  )
}
