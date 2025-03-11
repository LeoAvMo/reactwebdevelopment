export const fetchData = async (): Promise<{ name: string; id: number }[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30"); // Traemos entre 20 y 30 Pokémon
    if (!response.ok) throw new Error("Error al obtener los datos");
    
    const data = await response.json();
    return data.results.map((pokemon: any, index: number) => ({
      name: pokemon.name,
      id: index + 1,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};