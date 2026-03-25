import React from "react";

import Card from "../ui/Card";

const AvaiblePlyer = ({
  data,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  //   console.log(data, "avable player");
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((play) => {
          //   console.log(play, "players");
          return (
            <Card
              setCoin={setCoin}
              coin={coin}
              play={play}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvaiblePlyer;
