import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <nav>
        <Link to="/" className="mr-4"> Home </Link>
        <Link to="/about" className="mr-4"> About </Link>
        {isAuthenticated && <Link to="/dashboard" className="mr-4"> Dashboard </Link>}
      </nav>
      {isAuthenticated ? (
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      ) : null}
    </header>
  );
};

export default Header;