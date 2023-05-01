import { googleSignIn } from "../functions/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
export default function Account() {
  return (
    <div className="flex items-center justify-center">
      <button onClick={googleSignIn} className="btn btn-primary">
        <FontAwesomeIcon icon={faGoogle} className="mr-4" />
        <span>Sign In With Google</span>
      </button>
    </div>
  );
}
