import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ play, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
  const [chosePlayers, setChosePlayers] = useState(false);
  console.log(chosePlayers);
  console.log(setChosePlayers);
  console.log(play.price);

  const handleChoseCoin = () => {
    const setBalance = coin - play.price;
    if (setBalance >= 0) {
      setCoin(coin - play.price);
    } else {
      alert("No money available");
      return;
    }
    alert(`${play.playerName} is selected`);
    setChosePlayers(true);
    setSelectedPlayers([...selectedPlayers,play])
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-full rounded-2xl object-cover "
            src={play.playerImg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser></FaUser> {play.playerName}
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaFlag></FaFlag>
              <p>{play.playerCountry}</p>
            </div>
            <div>
              <button className="btn">
                <h3>{play.playerType}</h3>
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <p className="font-bold">rating {play.rating}</p>
          <div className="flex justify-between font-bold">
            <p>{play.battingStyle}</p>
            <p className="text-right">{play.bowlingStyle}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Price: {play.price}</p>
            <button
              onClick={handleChoseCoin}
              className={`${chosePlayers === false ? "btn" : "bg-[#E7FE29] p-2 rounded-sm"}`}
            >
              {chosePlayers === true ? <h>relected</h> : <h>Choose plyers</h>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
