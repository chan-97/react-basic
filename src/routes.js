import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/movies",
    component: Movies
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/user/:id",
    component: UserDetail
  }
]