import { useState, useEffect } from "react";
import axios from "axios";

const Detail = (props) => {
  const { number } = props;
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number || 1}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      });
  }, [number]);

  return (
    <div className="flex-[5_5_auto] bg-blue-200 rounded-tr-md rounded-br-md">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div>Name: {pokemon.name}</div>
          <div>Image</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
