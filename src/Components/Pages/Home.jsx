// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../widgets/Sidenav.Dashboars";
import StudentDetails from "../widgets/Student.page.details";
import StudentPlacement from "../widgets/Student.placement.details";
import CompanyDetail from "../widgets/Company.details";

function Home() {
  const [active, setActive] = useState('students');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (active === 'students') {
      navigate("/dashboard/studentdetails");
    } else if (active === 'placements') {
      navigate("/dashboard/studentplacementdetails");

    } else {
      navigate("/dashboard");
    }
  }, [active, navigate]);

  return (
    <div className="relative w-screen min-h-screen overflow-auto bg-gray-100">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} isSidebarOpen={isSidebarOpen} />

      {/* Content Area */}
      <div className="p-4">
        {location.pathname === "/dashboard/studentdetails" && <StudentDetails isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        {location.pathname === "/dashboard/studentplacementdetails" && <StudentPlacement isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        {location.pathname.startsWith("/dashboard/studentplacement/company/") && <CompanyDetail isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  );
}

export default Home;
