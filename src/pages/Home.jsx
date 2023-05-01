import { getPopularMovies } from "../functions/movies";
import { useState, useEffect } from "react";
import TopMovies from "../components/TopMovies";
import PopularMovies from "../components/PopularMovies";

export default function Home() {
  return (
    <main>
      <PopularMovies />
      <TopMovies />
    </main>
  );
}
