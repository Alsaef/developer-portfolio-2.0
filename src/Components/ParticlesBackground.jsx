import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: "#000000",
    },
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      size: {
        value: 1,
      },
      move: {
        enable: true,
        speed: 0.05,
        direction: "none",
        outMode: "out",
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
      shape: {
        type: "circle",
      },
      links: {
        enable: false,
      },
      collisions: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
