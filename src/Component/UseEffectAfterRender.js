import React, { useState, useEffect } from "react";

const UseEffectAfterRender = () => {
  const [counter, setConter] = useState(0);
  useEffect(() => {
    document.title = `Counter is ${counter}`;
  });
  return (
    <div>
      <button onClick={() => setConter(counter + 1)}>
        Click count {counter}
      </button>
    </div>
  );
};

export default UseEffectAfterRender;
