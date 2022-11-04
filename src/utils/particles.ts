import { ISourceOptions } from 'tsparticles-engine/types';

const particlesConfig: ISourceOptions = {
  background: {
    color: {
      value: '#4e34c9',
    },
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: !0,
        value_area: 800,
      },
    },
    color: {
      value: '#fff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.1,
      random: !0,
      anim: {
        enable: !0,
        speed: 0,
        opacity_min: 0,
        sync: !0,
      },
    },
    size: {
      value: 10,
      random: !1,
      anim: {
        enable: !0,
        speed: 15,
        size_min: 0,
        sync: !1,
      },
    },
    move: {
      enable: !0,
      speed: 1,
      direction: 'none',
      random: !0,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 3e3,
        rotateY: 3e3,
      },
    },
    array: [],
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: !0,
        mode: 'push',
      },
      resize: !0,
    },
    modes: {
      push: {
        particles_nb: 5,
      },
    },
  },
  retina_detect: !1,
};

export default particlesConfig;
