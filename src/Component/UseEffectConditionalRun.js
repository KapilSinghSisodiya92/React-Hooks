import React, { useState, useEffect } from "react";

const UseEffectConditionalRun = () => {
  const [counter, setConter] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating title");
    document.title = `Counter is ${counter}`;
  }, [counter]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setConter(counter + 1)}>
        Click count {counter}
      </button>
    </div>
  );
};

export default UseEffectConditionalRun;
