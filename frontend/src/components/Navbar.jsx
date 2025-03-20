import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";

const Navbar = () => {
  const { role } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            GATE PYQ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            {role === "admin" && (
              <>
                <Link
                  to="/admin"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Admin Dashboard
                </Link>
                <Link
                  to="/admin/profile"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Profile
                </Link>
              </>
            )}
            {role === "student" && (
              <>
                <Link
                  to="/student"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Student Dashboard
                </Link>
                <Link
                  to="/student/profile"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Profile
                </Link>
              </>
            )}
            {!role && (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
            {role && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;