import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import PokemonCard from "../components/PokemonCard";

const ProtectedPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchData();
      setPokemons(data);
    };
    getPokemons();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Pokémon</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProtectedPage;