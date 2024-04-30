import { Navigate } from "react-router-dom";
import isLogin from "../utilities";
export default function PrivteRoute({ children }) {
  return <>{isLogin() ? children : <Navigate to="/login"></Navigate>}</>;
}
