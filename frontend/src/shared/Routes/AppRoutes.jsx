import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/LayoutHome";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <div>Config</div>,
      },
      {
        path: "/atendimentos",
        element: <div>Config</div>,
      },
      {
        path: "/servicos",
        element: <div>Config</div>,
      },
      {
        path: "/financeiro",
        element: <div>Financeiro</div>,
      },
      {
        path: "/perfil",
        element: <div>Config</div>,
      },
      {
        path: "/config",
        element: <div>Config</div>,
      },
    ],
  },
]);
export default AppRoutes;
