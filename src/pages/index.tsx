import type { NextPage } from 'next';
import Home from '../Modules/Home';
import ParticlesComponent from '../Modules/Particles';

const RootApp: NextPage = () => {
  return (
    <>
      <ParticlesComponent />
      <Home />
    </>
  );
};

export default RootApp;
