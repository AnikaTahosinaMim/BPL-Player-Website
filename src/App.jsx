import "./App.css";
import Banner from "./components/Homepage/Banner";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Homepage/Players/Player";
import { Suspense, useState } from "react";
// const fetchData = fetch("/data.json")
// const fetchData = axios("/public/data.json");
const playerdata = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};
// console.log(fetchData);

function App() {
  const playerPromised = playerdata();
  const [coin, setCoin] = useState(50000);
  console.log(setCoin, coin);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <Player playerPromised={playerPromised} coin={coin} setCoin={setCoin}></Player>
      </Suspense>
    </>
  );
}

export default App;
