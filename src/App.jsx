import "./App.css";
import Banner from "./components/Homepage/Banner";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Homepage/Players/Player";
import { Suspense } from "react";
// const fetchData = fetch("/data.json")
// const fetchData = axios("/public/data.json");
const playerdata = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
// console.log(fetchData);

function App() {
  const playerPromised = playerdata();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <Player playerPromised={playerPromised}></Player>
      </Suspense>
    </>
  );
}

export default App;
