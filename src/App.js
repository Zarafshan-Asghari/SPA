import { useRoutes } from "react-router-dom";

import routes from "./routes";
function App() {
  const Routes = useRoutes(routes);
  return Routes;
}
export default App;
