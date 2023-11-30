import { createBrowserRouter } from "react-router-dom";
import Authorization from "../pages/Authorization";
import Categories from "../pages/Categories";
import Languages from '../pages/Languages'
import Sources from '../pages/Sources'
import Profile from '../pages/Profile'


export const questionnaireRoutes = [
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/languages',
    element: <Languages />,
  },
  {
    path: '/sources',
    element: <Sources />
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authorization />,
  },
  ...questionnaireRoutes,
  {
    path: '/profile',
    element: <Profile />
  }
]);
