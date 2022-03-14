import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Projects from "../components/pages/Projects";
import Resume from "../components/pages/Resume";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/resume",
    component: Resume,
  },
];
