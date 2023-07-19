import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import particlesConfig from '../../utils/particles';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      options={particlesConfig}
      init={particlesInit}
    />
  );
};

export default ParticlesComponent;
