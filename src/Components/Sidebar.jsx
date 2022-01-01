import { useState, useEffect } from "react";
import axios from "axios";
import SearchParams from "./SearchParams";

const Sidebar = (props) => {
  const [loading, setLoading] = useState(false);
  const [pokelist, setPokeList] = useState([]);

  const { handleSelectPokemon } = props;

  useEffect(() => {
    // There are 898 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit= 898&offset=0")
      .then((response) => {
        const newList = response.data.results.map((pokemon, index) => ({
          name: pokemon.name,
          no: index + 1,
        }));
        setPokeList(newList);
      });
  }, []);

  return (
    <div className="flex flex-col justify-start flex-[2_2_80px]">
      {/* Search Params */}
      <div className="flex-1 bg-red-600 rounded-tl-md">
        <SearchParams />
      </div>
      {/* Pokemons List */}
      <div className="flex-[3_3_0] bg-white rounded-bl-md overflow-auto">
        <ul>
          {pokelist.map((pokemon) => (
            <li key={pokemon.no}>
              <button
                onClick={(e) => handleSelectPokemon(e)}
                value={pokemon.no}
              >
                # {pokemon.no} - {pokemon.name}{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
