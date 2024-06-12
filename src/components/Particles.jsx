import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false, zindex: -1 },
      background: {
        color: {
          value: "#000000", // Dark background color
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Change click interaction mode to push
          },
          onHover: {
            enable: true,
            mode: "repulse", // Change hover interaction mode to repulse
          },
        },
        modes: {
          push: {
            distance: 100, // Decrease push distance for more immediate effect
            duration: 0, // Instantaneous push effect
          },
          repulse: {
            distance: 100, // Increase repulse distance for a wider effect
            duration: 0.4, // Slightly longer repulse duration
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // White particle color
        },
        links: {
          color: "#FFFFFF", // White link color
          distance: 150,
          enable: true,
          opacity: 0.4, // Decrease link opacity for a more subtle effect
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Set particles to bounce off canvas edges
          },
          random: false, // Disable random particle movement
          speed: 2, // Increase particle speed for a livelier effect
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800, // Increase density for more particles
          },
          value: 80, // Decrease total number of particles for a cleaner look
        },
        opacity: {
          value: 0.8, // Decrease particle opacity for a more transparent effect
        },
        shape: {
          type: "circle", // Use circles for particle shape
        },
        size: {
          value: { min: 1, max: 3 }, // Set particle size range
          animation: {
            enable: true,
            speed: 4, // Increase size animation speed
            minimumValue: 0.1, // Set minimum size for smoother animation
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      className="particle"
    />
  );
};

export default ParticlesComponent;
