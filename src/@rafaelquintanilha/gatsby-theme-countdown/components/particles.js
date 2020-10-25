import React from "react";
import { Particles as ReactParticles } from 'react-particles-js';
import params from '../configs/particles';

const Particles = () => (
  <ReactParticles 
    style={{
      position: "absolute",
      top: 0,
      pointerEvents: "none"
    }}
    params={params}
  />
);

export default Particles;
