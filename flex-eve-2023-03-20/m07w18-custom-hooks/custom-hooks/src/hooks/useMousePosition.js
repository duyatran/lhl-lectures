import { useEffect, useState } from "react";

// return the user's current mouse position
const useMousePosition = () => {

  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const mousemoveHandler = (event) => {
      setCoords({x: event.clientX, y: event.clientY});
    };

    document.addEventListener('mousemove', mousemoveHandler);

    const cleanup = () => {
      document.removeEventListener('mousemove', mousemoveHandler)
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
