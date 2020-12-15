import React, { useState } from "react";

const UseStateCouner = () => {
  const [counter, setCouner] = useState(0);
  return (
    <div>
      <button onClick={() => setCouner(counter + 1)}>Count is {counter}</button>
    </div>
  );
};

export default UseStateCouner;
