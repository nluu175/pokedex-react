import { useState, useEffect } from "react";
import axios from "axios";

const Detail = (props) => {
  const { number } = props;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [photoURL, setPhotoURL] = useState(
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  );

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number || 1}`)
      .then((response) => {
        setPokemon(response.data);
        setPhotoURL(
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idFormatting(
            number
          )}.png`
        );
        setLoading(false);
      });
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

  const nameFormatting = (name) => {};

  return (
    <div className="flex-[5_5_auto] bg-blue-200 rounded-tr-md rounded-br-md">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div>Name: {pokemon.name}</div>
          <div>
            <img src={photoURL} alt="a pokemon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
