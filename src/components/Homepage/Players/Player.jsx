import React, { use } from "react";
import AvaiblePlyer from "../../AvaiblePlayers/AvaiblePlyer";

const Player = ({ playerPromised }) => {
  console.log(playerPromised);
  const data = use(playerPromised);
  console.log(data);
  return (
    <div className="container mx-auto ">
      <h3>data : {data.length}</h3>
      <div className="">
        <AvaiblePlyer data={data}></AvaiblePlyer>
      </div>
    </div>
  );
};

export default Player;
