export const fetchData = async (): Promise<{ name: string; url: string }[]> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20"); // Obtener 20 Pokémon
    if (!response.ok) throw new Error("Error al obtener los datos");
    const data = await response.json();
    return data.results; // Retorna solo la lista de Pokémon
  } catch (error) {
    console.error(error);
    return [];
  }
};