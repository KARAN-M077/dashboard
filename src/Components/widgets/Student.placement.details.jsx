// src/widgets/StudentPlacement.jsx
import React from "react";
import { Bars3Icon, XMarkIcon, UserCircleIcon, CalendarIcon, CurrencyRupeeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import placementDriveData from '../data/company.drive';

function StudentPlacement({ isSidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();


  const handleCompanyClick = (companyId) => {
    navigate(`/dashboard/studentplacement/company/${companyId}`);
  };

  if (!placementDriveData || placementDriveData.length === 0) {
    return <div>No placement data available.</div>;
  }

  return (
    <>
      <nav className="bg-transparent w-full flex justify-between items-center">
        <div className="hidden lg:flex items-center ml-auto px-10">
          <UserCircleIcon className="h-12 w-12 text-gray-600" />
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

      <div className="flex w-3/4 flex-row flex-wrap float-right mr-10">
        {placementDriveData.map((placement) => (
          <div
            key={placement.id}
            className="bg-white rounded-lg p-6 w-auto mx-auto border-2 border-gray-400 my-4 cursor-pointer"
            onClick={() => handleCompanyClick(placement.id)}
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
              <div className="bg-blue-100 text-blue-600 text-xs font-bold rounded-full px-2 py-1">
                Upcoming
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
            <div className="mt-4 bg-yellow-100 text-yellow-800 text-center rounded-full px-2 py-1 text-xs font-semibold">
              Oncampus - IT
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentPlacement;
