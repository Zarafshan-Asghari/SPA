import Home from "./pages/home/home";
import About from "./pages/about/about";
import Article from "./pages/article/article";
import Login from "./pages/login/login";
import Course from "./pages/course/course";
import Blog from "./pages/blog/blog";
import Setting from "./pages/setting";
import PrivteRoute from "./components/privateRoute";
const routes = [
  { path: "/", element: <Home></Home> },
  { path: "/about", element: <About></About> },
  {
    path: "/article",
    element: (
      <PrivteRoute>
        {" "}
        <Article />
      </PrivteRoute>
    ),
  },
  {
    path: "/setting",
    element: (
      <PrivteRoute>
        {" "}
        <Setting />
      </PrivteRoute>
    ),
  },
  { path: "/course/:courseId", element: <Course></Course> },
  { path: "/login", element: <Login></Login> },
  {
    path: "/blog/*",
    element: <Blog></Blog>,
    children: [
      {
        path: "react",
        element: (
          <h2 className="text-3xl uppercase text-blue-800 m-4">react.js</h2>
        ),
      },
      {
        path: "nextjs",
        element: (
          <h2 className="text-3xl uppercase text-blue-800 m-4">next.js</h2>
        ),
      },
      {
        path: "javaScript",
        element: (
          <h2 className="text-3xl uppercase text-blue-800 m-4">javaScript</h2>
        ),
      },
    ],
  },
];

export default routes;
