import React, { useRef, useEffect } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //Focus input element on load
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefHook;
