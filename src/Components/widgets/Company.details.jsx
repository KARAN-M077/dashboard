// src/widgets/CompanyDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import placementDriveData from '../data/company.drive';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
function CompanyDetail({ isSidebarOpen, toggleSidebar }) {
  const { companyId } = useParams();
  console.log(companyId);
  const company = placementDriveData.find(c => c.id === parseInt(companyId,10));

  if (!company) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Company not found.</h1>
      </div>
    );
  }

  return (
    <>
      <nav className="bg-transparent w-full flex justify-between items-center">
        {/* Desktop View: Profile Icon on the Right */}
        <div className="hidden lg:flex items-center ml-auto px-10">
          <UserCircleIcon className="h-12 w-12 text-gray-600" />
        </div>

        {/* Mobile View: Bars Icon */}
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
      {/* Company Details */}
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800">{company.companyName}</h1>
      <p className="text-lg text-gray-600">Location: {company.companyLocation}</p>
      <p className="text-lg text-gray-600">Drive Date: {new Date(company.driveDate).toLocaleDateString()}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Requirements</h2>
        <ul className="list-disc list-inside mt-2">
          {company.requirements.map((req, index) => (
            <li key={index} className="text-gray-600">{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Roles and Salaries</h2>
        <ul className="mt-2">
          {company.rolesAndSalary.map((roleInfo, index) => (
            <li key={index} className="flex justify-between py-2 border-b text-gray-600">
              <span>{roleInfo.role}</span>
              <span className="font-bold">{roleInfo.salary} PA</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Number of Rounds</h2>
        <p className="text-gray-600">{company.numberOfRounds}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Round Details</h2>
        <ul className="mt-2">
          {company.roundDetails.map((round, index) => (
            <li key={index} className="flex justify-between py-2 border-b text-gray-600">
              <span>Round {round.roundNumber}: {round.description}</span>
              <span className="font-semibold text-blue-500">{round.venue}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default CompanyDetail;
