import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

const UseContextHook = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h4>
        {user} -- {channel}
      </h4>
    </div>
  );
};

export default UseContextHook;
