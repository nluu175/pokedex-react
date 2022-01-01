import { useState, useEffect } from "react";
import axios from "axios";
import NameFormatting from "../Utils/nameFormatting.js";
import getWeakness from "../Utils/getWeakness";

const Detail = (props) => {
  const { number } = props;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [photoURL, setPhotoURL] = useState();
  const [pokeTypes, setPokeTypes] = useState([]);

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

          let typesArray = [];
          response.data.types.forEach((type) => {
            typesArray.push(type.type.name);
          });
          setPokeTypes(typesArray);
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

  const formatTypes = () => {
    return pokeTypes.map((type, index) => <li key={type}>{type}</li>);
  };

  const convertWeight = (weight) => {
    // hectograms to kg
    return weight / 10;
  };

  const convertHeight = (height) => {
    // decimetres to m
    return height / 10;
  };

  if (loading) {
    return (
      <div className="flex-[5_5_0] bg-blue-200 rounded-tr-md rounded-br-md text-auto">
        "Loading ..."
      </div>
    );
  }

  return (
    <div className="flex-[5_5_0] bg-blue-200 rounded-tr-md rounded-br-md text-auto flex flex-col justify-start items-center">
      {/* Name */}
      <div className="flex-none">
        <h1>{NameFormatting(pokemon.name)}</h1>
      </div>
      {/* Image */}
      <div className="w-[300px] h-[300px] border-4 m-auto bg-zinc-100 flex-none">
        <img
          src={
            photoURL ||
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
          }
          alt={pokemon.name}
          className="w-[100%] h-auto"
        />
      </div>
      {/* Info */}
      <div className="flex-auto">
        {/* Natural Stat */}
        <div className="flex-1">
          <p>Weight: {convertWeight(pokemon.weight)} kg</p>
          <p>Height: {convertHeight(pokemon.height)} m</p>
          <p>Abilities: {formatAbilities(pokemon.abilities)} </p>
        </div>
        {/* Type */}
        <div className="flex-1">
          <h2>Type</h2>
          {formatTypes()}
        </div>
        {/* Weaknesses */}
        <div className="flex-1">
          <h2>Weaknesses</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
