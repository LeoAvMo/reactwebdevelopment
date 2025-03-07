export const fetchData = async (): Promise<{ name: string; id: number }[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20"); // Trae los primeros 20 Pokémon
    if (!response.ok) throw new Error("Error al obtener los datos");
    
    const data = await response.json();
    const pokemonList = data.results.map((pokemon: any, index: number) => ({
      name: pokemon.name,
      id: index + 1, // La API no proporciona el ID directo aquí, lo inferimos por el índice
    }));

    return pokemonList;
  } catch (error) {
    console.error(error);
    return [];
  }
};