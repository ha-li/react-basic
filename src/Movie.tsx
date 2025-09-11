import { useState, useEffect } from 'react';

type Movie = {
    name: string;
  };

export function MovieSearch () {

  const [movie, setMovie] = useState<Movie>();
  const [searchQuery, setSearchQuery] = useState<number>(1); // Initial search query
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setMovie({name: ""}); // Clear movies if the search query is empty
      return;
    }

    setLoading(true);
    // Replace with a real API endpoint
    const url = `https://swapi.info/api/people/${searchQuery}`;

    // Fetch movies based on the search query
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovie(data.results); // Assuming the data has a 'results' key
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, [searchQuery]); // The effect re-runs whenever `searchQuery` changes

  const handleChange = (e: number) => {
    setSearchQuery(e);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleChange(Number(e.target.value))}
        placeholder="Search for a movie..."
      />
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <ul>
            {movie && (
              <li key={movie.name}>{movie.name}</li>
            )}
        </ul>
      )}
    </div>
  );
}

