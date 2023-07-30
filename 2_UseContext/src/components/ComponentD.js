import React, { useContext } from "react";
import { UserContex, ChannelContext } from "../App";
const ComponentD = () => {
  const user = useContext(UserContex);
  const channel = useContext(ChannelContext);
  return <div>
    {user} - {channel}
  </div>;
};

export default ComponentD;
