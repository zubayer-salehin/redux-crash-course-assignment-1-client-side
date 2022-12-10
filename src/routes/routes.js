import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddCourse from "../pages/Dashboard/AddCourse";
import CourseList from "../pages/Dashboard/CourseList";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";
import CourseDetails from "../pages/Main/CourseDetails";
import UpdateCourse from "../pages/Dashboard/UpdateCourse";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <ReadingHistory />,
      },
      {
        path: "courseDetail/:id",
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <CourseList />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "updateCourse/:id",
        element: <UpdateCourse />,
      }
    ],
  },
]);

export default routes;
