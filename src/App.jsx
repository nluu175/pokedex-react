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
      {/* Background */}
      <div className="flex justify-center items-center h-screen bg-contain">
        {/* Container */}
        <div className="flex flex-1 rounded-md bg-white min-w-[50%] max-w-[70%] h-[800px] border-2 border-rose-600">
          <Sidebar handleSelectPokemon={handleSelectPokemon} />
          <Detail number={currentPokemon} />
        </div>
      </div>
    </div>
  );
};

export default App;
