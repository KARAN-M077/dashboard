import React, { useState, useRef, useEffect, } from "react";
import axios from "axios";
import { Bars3Icon, XMarkIcon, UserCircleIcon, PencilSquareIcon, ArrowRightOnRectangleIcon, PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Link, Navigate, useNavigate } from "react-router-dom";
import StudentAbout from "../Min-widget/Student.about";
import StudentExperience from "../Min-widget/Student.experience";
import StudentProject from "../Min-widget/Student.project";
import StudentEducation from "../Min-widget/Student.Education";
import useFecthResume from "../../Hooks/useFetchResume";
function StudentDetails({ isSidebarOpen, toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const Studentform = () => {
    navigate("/Studentseditdetails");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveSkillIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }
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
          onClick={Studentform}
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
      <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:ml-72  ">
        <StudentAbout />
        <div className="flex flex-col lg:flex-col bg-transparent gap-3">
          <StudentExperience />
          <StudentProject />
          <p className="text-lg font-bold mb-2 text-left">Education</p>
          <StudentEducation />
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
