import React, { useState, useRef, useEffect } from "react";

const UseRefHook2 = () => {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Hook Timer - {timer}</p>
      <button onClick={clearInterval(intervalRef.current)}>
        Clear Hook Interval
      </button>
    </div>
  );
};

export default UseRefHook2;
