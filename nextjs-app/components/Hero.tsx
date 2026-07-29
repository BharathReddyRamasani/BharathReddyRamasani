import React, { useEffect } from 'react';
import anime from 'animejs';

export default function Hero() {
  useEffect(() => {
    const timeline = anime.timeline({ easing: 'easeOutExpo', duration: 800 });
    timeline
      .add({
        targets: '.line',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(120),
      })
      .add({
        targets: '.dot',
        scale: [0, 1],
        opacity: [0, 1],
        offset: '-=500',
        delay: anime.stagger(80),
      });
    return () => timeline.pause();
  }, []);

  return (
    <div style={{ padding: 48, background: '#071029', color: '#e6eef8', minHeight: 260, display: 'flex', alignItems: 'center' }}>
      <div>
        <h1 className="line" style={{ margin: 0, fontSize: 36 }}>Bharath Reddy</h1>
        <p className="line" style={{ marginTop: 8, color: '#93c5fd' }}>Full-stack · ML · Data · Animated UX</p>

        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <div className="dot" style={{ width: 12, height: 12, borderRadius: 6, background: '#10b981' }} />
          <div className="dot" style={{ width: 12, height: 12, borderRadius: 6, background: '#3b82f6' }} />
          <div className="dot" style={{ width: 12, height: 12, borderRadius: 6, background: '#f97316' }} />
        </div>
      </div>
    </div>
  );
}
