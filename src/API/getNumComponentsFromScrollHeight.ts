import { useState, useEffect } from 'react';

const MIN_NUM = 6;

export function getNumComponentsFromScrollHeight() {
    const [numComponents, setNumComponents] = useState<number>(0);
    useEffect(() => {
    function handleResize() {
      const windowHeight = document.body.scrollHeight;
      console.log(windowHeight);

      const componentHeight = 75;
      setNumComponents(Math.floor(windowHeight / componentHeight));
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);
    return numComponents<MIN_NUM?MIN_NUM:numComponents;
}