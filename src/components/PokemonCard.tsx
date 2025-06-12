import React from "react";

interface PokemonCardProps {
  name: string;
  index: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, index }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

  return (
    <div className="border p-4 rounded-lg shadow-md text-center bg-white hover:shadow-xl transition">
      <img
        src={imageUrl}
        alt={name}
        className="mx-auto mb-2 w-24 h-24"
        loading="lazy"
      />
      <h2 className="text-xl font-bold capitalize">{name}</h2>
      <p className="text-gray-500"># {index}</p>
    </div>
  );
};

export default PokemonCard;