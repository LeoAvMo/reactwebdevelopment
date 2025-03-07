import React from "react";

interface PokemonCardProps {
  name: string;
  index: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, index }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold capitalize">{name}</h2>
      <p className="text-gray-500"># {index + 1}</p>
    </div>
  );
};

export default PokemonCard;