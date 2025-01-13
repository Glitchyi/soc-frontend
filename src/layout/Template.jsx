import { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const Template = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x2d902,
          midtoneColor: 0x66ff4e,
          lowlightColor: 0xeb7c,
          baseColor: 0xffffff,
          zoom: 0.1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="w-screen min-h-screen overflow-clip">
      <div className="mx-10 pt-10">
        <Header avatar="" github=""/>
      </div>
      {children || <></>}
    </div>
  );
};

export default Template;
