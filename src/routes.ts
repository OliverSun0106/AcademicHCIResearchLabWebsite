import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import People from "./pages/People";
import Publications from "./pages/Publications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Overview },
      { path: "projects", Component: Projects },
      { path: "people", Component: People },
      { path: "publications", Component: Publications },
    ],
  },
]);
