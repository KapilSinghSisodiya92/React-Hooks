import React, { useState, useEffect } from "react";

const UseEffectWithWrongDependency = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Counter {count}</div>;
};

export default UseEffectWithWrongDependency;
