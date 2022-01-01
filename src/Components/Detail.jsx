import { useState, useEffect } from "react";
import axios from "axios";
import NameFormatting from "../Utils/NameFormatting.js";

const Detail = (props) => {
  const { number } = props;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [photoURL, setPhotoURL] = useState();

  useEffect(() => {
    if (number) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => {
          setPokemon(response.data);
          setPhotoURL(
            `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idFormatting(
              number
            )}.png`
          );
          setLoading(false);
        });
    }
  }, [number]);

  const idFormatting = (id) => {
    if (id >= 0 && id < 10) {
      return `00${id}`;
    } else if (id < 99) {
      return `0${id}`;
    } else {
      return `${id}`;
    }
  };

  const formatAbilities = (abilities) => {
    let formattedString = abilities.map((ability, index) => (
      <li key={index}>{ability.ability.name}</li>
    ));
    return formattedString;
  };

  const formatTypes = (types) => {
    let formattedString = types.map((type, index) => (
      <li key={index}>{type.type.name}</li>
    ));

    return formattedString;
  };

  return (
    <div className="flex-[5_5_0] bg-blue-200 rounded-tr-md rounded-br-md">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {/* Name */}
          <div>
            <h1>{NameFormatting(pokemon.name)}</h1>
          </div>
          {/* Image */}
          <div className="w-[300px] h-[300px] border-4 m-auto bg-zinc-100">
            <img
              src={
                photoURL ||
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
              }
              alt={pokemon.name}
              className="w-[100%] h-auto"
            />
          </div>
          {/* Natural Stat */}
          <div>
            <p>Weight: {pokemon.weight} hectograms</p>
            <p>Height: {pokemon.height} decimetres</p>
            <p>Abilities: {formatAbilities(pokemon.abilities)} </p>
          </div>
          {/* Type */}
          <div>
            <h2>Type</h2>
            <p>{formatTypes(pokemon.types)}</p>
          </div>
          {/* Weaknesses */}
          <div>
            <h2>Weaknesses</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
