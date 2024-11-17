import { useState, useEffect, useRef } from "react";
const KEY = "f3cc39e2";
export function useMovie(query) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong while fetching data ");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not Found");
          setMovies(data.Search);
          setError("");
          console.log(data);
        } catch (err) {
          setMovies([]);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
