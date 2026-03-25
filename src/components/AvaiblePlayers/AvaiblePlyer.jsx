import React from "react";

import Card from "../ui/Card";

const AvaiblePlyer = ({ data }) => {
  console.log(data, "avable player");
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((play) => {
          console.log(play, "players");
          return (
           <Card play={play}></Card>
          )
        })}
      </div>
    </div>
  );
};

export default AvaiblePlyer;
