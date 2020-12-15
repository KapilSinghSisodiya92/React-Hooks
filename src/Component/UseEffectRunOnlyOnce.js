import React, { useState, useEffect } from "react";

const UseEffectRunOnlyOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <p>Mouse Over Effect</p>
      Hook X - {x} and Y -{y}
    </div>
  );
};

export default UseEffectRunOnlyOnce;
