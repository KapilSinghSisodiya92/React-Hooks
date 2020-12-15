import React, { useState } from "react";
import UseEffectRunOnlyOnce from "./UseEffectRunOnlyOnce";

const UseEffectWithCleanUp = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toggle display of Mouse Over
      </button>
      {display && <UseEffectRunOnlyOnce />}
    </div>
  );
};

export default UseEffectWithCleanUp;
