import { useState, useEffect, useRef } from 'react'
import FOG from 'vanta/dist/vanta.fog.min.js'
import * as THREE from 'three'

// eslint-disable-next-line react/prop-types
const Styles = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x2d902,
        midtoneColor: 0x66ff4e,
        lowlightColor: 0xeb7c,
        baseColor: 0xffffff,
        zoom: 0.10
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef} className='w-full h-full border'>
      {children|| <></>}
    </div>
  )
}

export default Styles