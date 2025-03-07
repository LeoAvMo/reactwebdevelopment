import React from "react";

interface CardProps {
  name: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ name, id }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white text-center">
      <h3 className="text-xl font-bold">#{id} {name.toUpperCase()}</h3>
    </div>
  );
};

export default Card;