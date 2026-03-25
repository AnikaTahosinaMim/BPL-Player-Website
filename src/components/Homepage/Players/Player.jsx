import React, { use, useState } from "react";
import AvaiblePlyer from "../../AvaiblePlayers/AvaiblePlyer";
import SelectdPlayer from "../../SelectedPlayers/SelectdPlayer";

const Player = ({ playerPromised, setCoin, coin }) => {
  // console.log(playerPromised);
  const data = use(playerPromised);
  // console.log(data);
  const [selectBnt, setSelecBtn] = useState("available");
  console.log(selectBnt, setSelecBtn);
  // for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between my-8">
        {selectBnt === "available" ? (
          <h3 className="font-bold text-2xl">Available Players</h3>
        ) : (
          <h3 className="font-bold text-2xl">
            Selected Players{selectedPlayers.length}/{data.length}
          </h3>
        )}
        <div className="flex items-center">
          <button
            onClick={() => setSelecBtn("available")}
            className={`btn ${
              selectBnt === "available" ? "bg-[#E7FE29]" : "bg-gray-300"
            }  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelecBtn("rejected")}
            className={`btn ${
              selectBnt === "rejected" ? "bg-[#E7FE29]" : "bg-gray-300"
            }  rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="">
        {selectBnt === "available" ? (
          <AvaiblePlyer
            setCoin={setCoin}
            coin={coin}
            data={data}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvaiblePlyer>
        ) : (
          <SelectdPlayer
            coin={coin}
            setCoin={setCoin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
          ></SelectdPlayer>
        )}
      </div>
    </div>
  );
};

export default Player;
