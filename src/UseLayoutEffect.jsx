import React, { useLayoutEffect, useRef } from 'react';

function LayoutEffectExample() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, []);

  return <div ref={divRef}>Hello, world! and i am vihar</div>;
}

export default LayoutEffectExample