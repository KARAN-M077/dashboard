import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, UserCircleIcon, PencilSquareIcon, ArrowRightOnRectangleIcon, MapPinIcon, CurrencyRupeeIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function StudentPlacement({ isSidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [placementDriveData, setPlacementDriveData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const { updatedStatus } = location.state || {}; 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const collegeId = userData?.collegeId;
        const studentId = userData?.studentId;
        if (!collegeId || !studentId) {
          setError("College ID or Student ID not found");
          setLoading(false);
          return;
        }
        setStudentId(studentId); // Set the studentId

        const response = await axios.get(`https://devsquad-api.onrender.com/api/drive/get-drive/${collegeId}`);
        const drivedata = response.data.data;

        // Ensure placementDriveData is set to an array
        setPlacementDriveData(drivedata);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch placement data");
        setLoading(false);
      }
    };

    fetchPlacementData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(placementDriveData) || placementDriveData.length === 0) {
    return <div>No placement data available.</div>;
  }

  // Debugging output
  console.log("Student ID:", studentId);
  console.log("Placement Drive Data:", placementDriveData);
  console.log("Updated Status:", updatedStatus); // Check the updated status from CompanyDetail

  return (
    <>
<nav className="bg-transparent w-full flex justify-between items-center z-[10000]">
  <div className="hidden lg:flex items-center ml-auto px-10 relative">
    <UserCircleIcon
      className="h-12 w-12 text-gray-600 cursor-pointer"
      onClick={toggleDropdown}
    />
    <div
      className={`absolute z-[2] right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "opacity-100 top-14 translate-y-0" : "opacity-0 -top-48 translate-y-[-20px]"
      }`}
    >
      <ul className="py-2">
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
          // onClick={Studentform}
        >
          <PencilSquareIcon className="h-5 w-5 text-gray-600 mr-2" />
          <Link to="/Studentsignup">Edit Profile</Link>
        </li>

        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base">
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600 mr-2" />
          <button onClick={handleLogout} className="text-red-600 mr-2">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div className="lg:hidden flex items-center ml-auto">
    {isSidebarOpen ? (
      <XMarkIcon
        onClick={toggleSidebar}
        className="h-8 w-8 text-gray-600 cursor-pointer"
      />
    ) : (
      <Bars3Icon
        onClick={toggleSidebar}
        className="h-8 w-8 text-gray-600 cursor-pointer"
      />
    )}
  </div>
</nav>

<div className="flex w-3/4 justify-between flex-row flex-wrap float-right mr-10">
        {placementDriveData.map((placement) => {
          const eligibleStudents = placement.eligibleStudentsId || []; // Default to empty array if undefined

          // Debugging output
          console.log("Eligible Students for Placement:", eligibleStudents);

          const isEligible = eligibleStudents.includes(studentId);
          console.log("Eligible student:", isEligible);

          return (
            <Link
              key={placement._id}
              to={`/company/${placement._id}`}
              state={{ placement, eligibleStudents, studentId }}
            >
    <div
      key={placement.id}
      className="bg-white  rounded-lg p-6 lg:h-72 lg:w-80 sm:w-96  mx-auto border-[1px] border-gray-400 my-4 cursor-pointer "
    >
                <div className="flex justify-between items-start mb-4 gap-y-10">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-xs text-gray-500">Loading Image</span>
                    </div>
                    <div>
                      <p className="lg:text-lg">{placement.companyName}</p>
                      <div className="flex items-center text-sm text-blue-600">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span>{placement.companyLocation}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`bg-${isEligible ? 'green' : 'red'}-100 ${isEligible ? 'green' : 'red'}-600 text-xs font-bold rounded-full  ml-5 px-2 py-1 `}>
                    {isEligible ? 'Eligible' : 'Not Eligible'}
                  </div>
                </div>
                <div className="text-sm mb-4">
                  <p className="font-bold mb-2">Roles and Salaries:</p>
                  {placement.rolesAndSalary.map((roleInfo, roleIndex) => (
                    <div key={roleIndex} className="flex justify-between">
                      <span>{roleInfo.role}</span>
                      <span className="flex items-center">
                        <CurrencyRupeeIcon className="h-5 w-5 text-gray-500" />
                        {roleInfo.salary} PA
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <span className="ml-1">{new Date(placement.driveDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="mt-4text-center mt-4 px-2 py-1 text-center">
                  {placement.optedStudents?.includes(studentId) ? (
                  <p className="rounded-full bg-[rgb(228,255,221)] text-green-700 font-bold py-1 border-[1px] ">Opted-In</p>
                  ) : placement.optedOutStudents?.includes(studentId) ? (
                    <p className="rounded-full bg-[rgb(255,221,218)] text-red-600 font-bold py-1 border-[1px] ">Opted-Out</p>
                  ) : isEligible ? (
                    <p className="rounded-full bg-white text-black  border-gray-400 font-semibold py-1 border-[1px] ">Yet to Optin/Optout</p>
                  ) : (
                    <p className="rounded-full bg-[rgb(255,221,218)] text-red-600 font-medium py=1 border-[1px] ">Not Eligible</p>
                  )}
                </div>
                
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default StudentPlacement;
