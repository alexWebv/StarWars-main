// Define the interface for a Person object in the SWAPI
export interface IPerson {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[]; // Array of film IDs in which the person appears
  species: number[]; // Array of species IDs associated with the person
  vehicles: number[]; // Array of vehicle IDs the person has used
  starships: number[]; // Array of starship IDs the person has piloted
  created: string;
  edited: string;
  url: string;
}

// Define the interface for a Starship object in the SWAPI
export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: number[]; // Array of pilot IDs who have piloted the starship
  films: number[]; // Array of film IDs in which the starship appears
  created: string;
  edited: string;
  url: string;
}

// Define the interface for a Film object in the SWAPI
export interface IFilm {
  id: number;
  title: string;
  episode_id: 4; // The episode number of the film
  opening_crawl: string; // The opening crawl text of the film
  director: string;
  producer: string;
  release_date: string;
  characters: number[]; // Array of character IDs who appear in the film
  planets: number[]; // Array of planet IDs featured in the film
  starships: number[]; // Array of starship IDs featured in the film
  vehicles: number[]; // Array of vehicle IDs featured in the film
  species: number[]; // Array of species IDs featured in the film
  created: string;
  edited: string;
  url: string;
}

// Define the interface for a generic response from the SWAPI
export interface SwapiResponse<T> {
  count: number; // Total number of items available in the SWAPI
  results: T[]; // Array of results of type T
}
