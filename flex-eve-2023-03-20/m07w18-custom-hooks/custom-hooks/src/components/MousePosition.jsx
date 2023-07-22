// import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MousePosition = () => {

  const coords = useMousePosition();

  return (
    <>
      <h2>Mouse position component</h2>
      <h3>X-coordinate: {coords.x}</h3>
      <h3>Y-coordinate: {coords.y}</h3>
    </>
  )
}

export default MousePosition;