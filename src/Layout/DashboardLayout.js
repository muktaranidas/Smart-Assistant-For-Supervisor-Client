import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useStudent from "../hooks/useStudent";
import useSupervisor from "../hooks/useSupervisor";
import useLibrarian from "../hooks/useLibrarian";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isStudent] = useStudent(user?.email);
  const [isSupervisor] = useSupervisor(user?.email);
  const [isLibrarian] = useLibrarian(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {isStudent && (
              <>
                <li>
                  <Link to="/dashboard/submitProposal">Submit Proposal</Link>
                </li>
                <li>
                  <Link to="/dashboard/submitFinalProjectReport">
                    Submit Final Project Report
                  </Link>
                </li>
              </>
            )}

            {isSupervisor && (
              <>
                <li>
                  <Link to="/dashboard/checkProposal">Check Proposal</Link>
                </li>
                <li>
                  <Link to="/dashboard/checkProjectReport">
                    Check Project Report
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/acceptOrRejectProject">
                    Accept or Reject Project
                  </Link>
                </li>
              </>
            )}
            {isLibrarian && (
              <>
                <li>
                  <Link to="/dashboard/checkProposalL">Check Proposal</Link>
                </li>
                <li>
                  <Link to="/dashboard/checkProjectReportL">
                    Check Project Report
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/acceptOrRejectProjectL">
                    Accept or Reject Project
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
