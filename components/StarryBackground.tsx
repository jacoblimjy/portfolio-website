"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function StarryBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="starry"
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 120, density: { enable: true, width: 800, height: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: { min: 0.3, max: 0.6 } },
          size: { value: { min: 1, max: 2 } },
          move: { enable: true, speed: 0.2 }
        },
      }}
    />
  );
}
