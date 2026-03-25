import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ play }) => {
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
            <FaUser></FaUser> <h2>{play.playerName}</h2>
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

            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
