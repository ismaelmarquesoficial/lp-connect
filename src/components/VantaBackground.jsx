import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          color: 0xff0000,
          backgroundColor: 0x000000,
          points: 10,
          maxDistance: 25.00,
          spacing: 15.00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef} style={{ height: '100%', width: '100%', position: 'absolute' }} />;
};

export default VantaBackground; 