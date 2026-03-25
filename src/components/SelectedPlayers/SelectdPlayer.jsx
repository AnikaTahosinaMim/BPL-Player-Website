import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectdPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  console.log(selectedPlayers);
  const handleDeleteBtn = (player) => {
    console.log(player);
    const filterSelected = selectedPlayers.filter(
      (selected) => selected.playerName != player.playerName,
    );
    setSelectedPlayers(filterSelected);
    setCoin(coin + player.price);
  };
  return (
    <div className="space-y-4">
      {selectedPlayers.map((player) => {
        return (
          <div className="flex justify-between gap-4 p-4 rounded-2xl items-center border">
            <div className="flex items-center gap-5">
              <img
                className="h-[70px] object-cover rounded-sm w-auto"
                src={player.playerImg}
                alt=""
              />
              <div>
                <h2 className="flex items-center gap-2 font-semibold text-2xl">
                  <FaUserAlt></FaUserAlt> {player.playerName}
                </h2>
                <p className="font-semibold">{player.playerCountry}</p>
              </div>
            </div>
            <button>
              <MdDelete
                onClick={() => handleDeleteBtn(player)}
                className="btn text-red-500"
              ></MdDelete>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectdPlayer;
