import React, { use } from "react";

const Player = ({ playerPromised }) => {
  console.log(playerPromised);
  const data = use(playerPromised);
  console.log(data);
  return (
    <div>
      <h3>data : {data.length}</h3>
      <img src={data.playerImg} alt=""/>
    </div>
  );
};

export default Player;
