import { googleSignIn, signOut, getUser } from "../functions/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { favoriteGenres } from "../functions/movies";
import { useState, useEffect } from "react";

export default function Account() {
  const [genres, setGenres] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getGenres() {
      const genres = await favoriteGenres();
      setGenres(genres);
    }

    async function getUserData() {
      const user = await getUser();
      setUser(user);
    }

    getGenres();
    getUserData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {user ? (
        <div>
          {/* <img src={user.photoURL} alt={user.displayName} /> */}
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
          <button onClick={signOut} className="btn btn-primary m-2">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={googleSignIn} className="btn btn-primary m-2">
          <FontAwesomeIcon icon={faGoogle} className="mr-4" />
          <span>Sign In With Google</span>
        </button>
      )}
      {user && (
        <div className="flex flex-col">
          <h2 className="text-xl">Favorite Genres</h2>
          {genres.map((genre) => (
            <span key={genre.id} className="text-sm">
              {genre.name}: {genre.count}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
