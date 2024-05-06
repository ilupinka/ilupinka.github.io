import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Leftbar from "./leftbar";
import Leftbarlog from "./leftbarlog";
import Home from "./Home1";
import Cost from "./Cost1";
import Blog from "./Blog1";
import Zachem from "./Zachem";
import Reviews from "./Reviews1";
import Login from "./Login1";
import User from "./User";
import Addnote from "./Addnote";
import ErrorPage from "./errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Leftbar />
    <Home />
    </>,
    errorElement: <ErrorPage />
  },{
    path: "/cost",
    element: <>
    <Leftbar />
    <Cost />
    </>
  },{
    path: "/blog",
    element: <>
    <Leftbar />
    <Blog />
    </>
  },{
    path: "/reviews",
    element: <>
    <Leftbar />
    <Reviews />
    </>
  },{
    path: "/login",
    element: <>
    <Leftbar />
    <Login />
    </>
  },{
    path: "/user",
    element: <>
    <Leftbarlog />
    <User />
    </>
  },{
    path: "/blog/zachem",
    element: <>
    <Leftbar />
    <Zachem />
    </>
  },{
    path: "/user/addnote",
    element: <>
    <Leftbarlog />
    <Addnote />
    </>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)