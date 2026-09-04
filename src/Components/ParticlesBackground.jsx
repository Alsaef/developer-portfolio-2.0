import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // loadFull initializes all standard features, shapes, and interactions
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: "#000000",
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 120, // Optimized density for smooth hover performance
        density: {
          enable: true,
          value_area: 1200,
        },
      },
      color: {
        // Blends standard white with your primary theme color
        value: ["#ffffff", "#c084f5"],
      },
      size: {
        value: { min: 1, max: 2.5 }, // Dynamic sizes for depth
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      // Links are disabled globally but activated specifically on mouse hover
      links: {
        enable: true,
        distance: 150,
        color: "#c084f5",
        opacity: 0, 
        width: 1,
      },
    },
    interactivity: {
      detectsOn: "window", // Ensures interaction works even if hovering over other transparent divs
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Draws connecting lines to the cursor
        },
        onClick: {
          enable: true,
          mode: "push", // Spawns new particles on click
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.5, // Lines fade in when the cursor gets close
            color: "#c084f5",
          },
        },
        push: {
          quantity: 3, // Spawns 3 new particles per click
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
      className="absolute inset-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;