import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Team from "../Pages/Team/Team";
import About from "../Pages/About/About";
import { AdminLogin } from "../Pages/Admin/AdminLogin";
import AdminDashboard from "../Pages/Admin/AdminDashboard";

import Admins from "../Pages/Admin/Admins";
import AdminBlogs from "../Pages/Admin/AdminBlogs";
import AdminPortfolio from "../Pages/Admin/AdminPortfolio";
import BlogsCategory from "../Pages/Admin/BlogsCategory";
import AdminTeam from "../Pages/Admin/AdminTeam";
import AdminContacts from "../Pages/Admin/AdminContacts";
import AddBlogs from "../Pages/Admin/AddBlogs";
import EditBlog from "../Pages/Admin/EditBlog";
import Blog from "../Pages/Blog/Blog";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AddPortfolio from "../Pages/Admin/AddPortfolio";
import EditPortfolio from "../Pages/Admin/EditPortfolio";
import AdminRoute from "./AdminRoute";
import Contact from "../Pages/Contact/Contact";
import Notfound from "../Pages/Notfound/Notfound";

import Service from "../Pages/Servicess/Service";
import BlogDetails from "../Pages/Blog/BlogDetails";
import PortfolioDetails from "../Pages/Portfolio/PortfolioDetails";
import Privacy from "../Pages/Privacy/Privacy";
import Terms from "../Pages/Terms/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/terms-and-condition",
        element: <Terms />,
      },
      {
        path: "/blog/:slug/:id",

        element: <BlogDetails />,
      },
      {
        path: "/portfolio/:id",
        // loader: ({ params }) =>
        // fetch(`https://mocdt-comingsite-backend.vercel.app/api/v1/portfolio/single/${params.id}`),
        element: <PortfolioDetails />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Admins />,
      },

      {
        path: "category",
        element: <BlogsCategory />,
      },
      {
        path: "blogs",
        element: <AdminBlogs />,
      },
      {
        path: "blogs/add-blog",
        element: <AddBlogs />,
      },
      {
        path: "blogs/edit-blog/:id",
        element: <EditBlog />,
      },
      {
        path: "portfolio",
        element: <AdminPortfolio />,
      },
      {
        path: "portfolio/add-portfolio",
        element: <AddPortfolio />,
      },
      {
        path: "portfolio/edit-portfolio/:id",
        element: <EditPortfolio />,
      },

      {
        path: "team",
        element: <AdminTeam />,
      },
      {
        path: "contacts",
        element: <AdminContacts />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
