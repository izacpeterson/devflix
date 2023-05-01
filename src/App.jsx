import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import MyFavoriteMovies from "./pages/MyFavoriteMovies";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorites" element={<MyFavoriteMovies />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<ActorPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
