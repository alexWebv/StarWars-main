import axios from "axios";
import { Edge, Node } from "reactflow";
import { IPerson, SwapiResponse, IFilm, IStarship } from "../types/Swapi.types";

// Function to fetch people data from the SWAPI
export async function fetchPeople(page?: number) {
  return axios.get(`https://sw-api.starnavi.io/people?page=${page}`);
}

// Function to fetch data and prepare it for a graph visualization
export async function getDataForGrapth(slug: string) {
  // Fetch user data based on the provided slug
  const res = await fetch(`https://sw-api.starnavi.io/people/${slug}`);
  const userData: IPerson = await res.json();

  // Fetch films in which the user character appears
  const res2 = await fetch(`https://sw-api.starnavi.io/films?characters__in=${slug}`);
  const filmsData: SwapiResponse<IFilm> = await res2.json();

  // Collect all starship IDs from the films
  let starShipsIds: number[] = [];
  filmsData.results.forEach((item) => (starShipsIds = [...starShipsIds, ...item.starships]));
  const starShipsSet = new Set(starShipsIds); // Use a Set to avoid duplicate IDs

  // Fetch starships that are either piloted by the user or appear in the user's films
  const starshipsResponse = await fetch(
    `https://sw-api.starnavi.io/starships?pilots__in=${slug}&films__in=${[...Array.from(starShipsSet)].join(",")}`
  );
  const starshipsData: SwapiResponse<IStarship> = await starshipsResponse.json();

  // Initialize an empty array to store edges for the graph
  let edges: Edge[] = [];
  const userId = `${userData.name}-${userData.id}`; // Unique ID for the user node

  // Create a node for the user
  const heroNode: Node = {
    id: userId,
    type: "customHeroNode",
    data: { label: userData.name },
    position: { x: 0, y: 0 },
  };

  // Create nodes for each film and corresponding edges connecting them to the user
  const filmNodes: Node[] = filmsData.results.map((film, index) => {
    const filmId = `${film.title}-${film.id}`;
    edges.push({
      id: `e2-${film.id}`,
      source: userId,
      target: filmId,
    });
    return {
      id: filmId,
      type: "customFilmNode",
      data: { label: film.title },
      position: { y: 300, x: index % 2 ? (index + 1) * -100 : (index + 1) * 100 },
    };
  });

  // Create nodes for each starship and corresponding edges connecting them to the films
  const starshipNodes: Node[] = starshipsData.results.map((starship, index) => {
    const starshipId = `${starship.name}-${starship.id}`;
    starship.films.forEach((filmId) => {
      const film = filmsData.results.find((film) => film.id === filmId);
      if (film) {
        edges.push({
          id: `e3-${starship.id}`,
          source: `${film.title}-${film.id}`,
          target: starshipId,
        });
      }
    });

    return {
      id: starshipId,
      type: "customSharShipNode",
      data: { label: starship.name },
      position: { y: 600, x: index % 2 ? (index + 1) * -100 : (index + 1) * 100 },
    };
  });

  // Return the collected data and the graph structure
  return {
    user: userData,
    films: filmsData,
    starships: starshipsData,
    starWarsNodes: [heroNode, ...filmNodes, ...starshipNodes],
    starWarsEdges: edges,
  };
}
