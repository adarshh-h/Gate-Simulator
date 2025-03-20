import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, rolesAllowed }) => {
  const { user, role } = useSelector((state) => state.user);
  const location = useLocation();

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If rolesAllowed is provided and the user's role is not in the list, redirect to home or a forbidden page
  if (rolesAllowed && !rolesAllowed.includes(role)) {
    return <Navigate to="/" replace />; // You can also redirect to a "Forbidden" page
  }

  // If everything is fine, render the children (protected component)
  return children;
};

export default ProtectedRoute;