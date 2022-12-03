import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AcceptOrRejectProject from "../../Pages/Dashboard/AcceptOrRejectProject/AcceptOrRejectProject";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import CheckProjectReport from "../../Pages/Dashboard/CheckProjectReport/CheckProjectReport";
import CheckProjectReportL from "../../Pages/Dashboard/CheckProjectReportL/CheckProjectReportL";
import CheckProposal from "../../Pages/Dashboard/CheckProposal/CheckProposal";
import CheckProposalL from "../../Pages/Dashboard/CheckProposalL/CheckProposalL";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import SubmitProposal from "../../Pages/Dashboard/MyOrders/SubmitProposal";
import MyOrders from "../../Pages/Dashboard/MyOrders/SubmitProposal";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SubmitFinalProjectReport from "../../Pages/Dashboard/SubmitFinalProjectReport/SubmitFinalProjectReport";
import Categories from "../../Pages/Home/Categories/Categories";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import SupervisorRoute from "../AdminRoute/SupervisorRoute";
import StudentRoute from "../BuyerRoute/StudentRoute";
import LibrarianRoute from "../LibrarianRoute/LibrarianRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: "/categories",
      //   element: <Categories></Categories>,
      // },
      // {
      //   path: "/categories/:categoryId",
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://b612-used-products-resale-server-side-gamma.vercel.app/categories/${params.categoryId}`
      //     ),
      //   element: (
      //     <PrivateRoute>
      //       <Products></Products>
      //     </PrivateRoute>
      //   ),
      // },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/submitProposal",
        element: (
          <StudentRoute>
            <SubmitProposal></SubmitProposal>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/submitFinalProjectReport",
        element: (
          <StudentRoute>
            <SubmitFinalProjectReport></SubmitFinalProjectReport>
          </StudentRoute>
        ),
      },
      {
        path: "/dashboard/checkProposal",
        element: (
          <SupervisorRoute>
            <CheckProposal></CheckProposal>
          </SupervisorRoute>
        ),
      },
      {
        path: "/dashboard/checkProjectReport",
        element: (
          <SupervisorRoute>
            <CheckProjectReport></CheckProjectReport>
          </SupervisorRoute>
        ),
      },
      {
        path: "/dashboard/acceptOrRejectProject",
        element: (
          <SupervisorRoute>
            <AcceptOrRejectProject></AcceptOrRejectProject>
          </SupervisorRoute>
        ),
      },
      {
        path: "/dashboard/checkProposalL",
        element: (
          <LibrarianRoute>
            <CheckProposal></CheckProposal>
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/checkProjectReportL",
        element: (
          <LibrarianRoute>
            <CheckProjectReport></CheckProjectReport>
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/acceptOrRejectProjectL",
        element: (
          <LibrarianRoute>
            <AcceptOrRejectProject></AcceptOrRejectProject>
          </LibrarianRoute>
        ),
      },
    ],
  },
]);
export default router;
