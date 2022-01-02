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
      {/* Background */}
      <h1 className="text-center text-lg bg-blue-100">Pokedex</h1>
      <div className="flex justify-center items-center h-screen bg-contain bg-blue-100">
        {/* Container */}
        <div className="flex flex-1 rounded-md bg-white min-w-[50%] max-w-[70%] h-[80%] border-[5px]  border-dashed border-black">
          <Sidebar handleSelectPokemon={handleSelectPokemon} />
          <Detail number={currentPokemon} />
        </div>
      </div>
    </div>
  );
};

export default App;
