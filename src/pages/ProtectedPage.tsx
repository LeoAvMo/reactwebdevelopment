import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import PokemonCard from "../components/PokemonCard";

const ProtectedPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<{ name: string; id: number }[]>([]);
  const [search, setSearch] = useState(""); // Estado para la búsqueda
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Mostramos 5 Pokémon por página

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchData();
        setPokemons(data);
      } catch (error) {
        console.error("Error cargando Pokémon:", error);
      }
    };
    getPokemons();
  }, []);

  // Filtrar Pokémon por nombre
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  // Paginación: obtener los Pokémon de la página actual
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirst, indexOfLast);

  // Calcular el total de páginas
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Pokémon</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      {/* Lista de Pokémon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentPokemons.length > 0 ? (
          currentPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} name={pokemon.name} index={pokemon.id} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No se encontraron Pokémon.</p>
        )}
      </div>

      {/* Paginador */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProtectedPage;