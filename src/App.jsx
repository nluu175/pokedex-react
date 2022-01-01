// import "./App.css";
import Sidebar from "./Components/Sidebar";
import Detail from "./Components/Detail";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState();
  const handleSelectPokemon = (e) => {
    setCurrentPokemon(e.target.value);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="flex justify-center items-center h-screen bg-orange-200 bg-[contain]">
        <div className="flex flex-1 rounded-md bg-white min-w-[1000px] max-w-[1200px] h-[800px]">
          <Sidebar handleSelectPokemon={handleSelectPokemon} />
          <Detail number={currentPokemon} />
        </div>
      </div>
    </div>
  );
};

export default App;
