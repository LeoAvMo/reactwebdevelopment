import { useEffect, useState } from "react";
import { fetchData } from "./api/fetchData";
import PokemonCard from "./components/PokemonCard";

const PAGE_SIZE = 3;

const Home = () => {
  const [pokemons, setPokemons] = useState<{ name: string; id: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      const data = await fetchData();
      setPokemons(data);
      setLoading(false);
    };
    getPokemons();
  }, []);

  const totalPages = Math.ceil(pokemons.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const currentPokemons = pokemons.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Pokémon Home</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {currentPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} name={pokemon.name} index={pokemon.id} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;