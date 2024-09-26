import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPinIcon, CurrencyRupeeIcon, CalendarIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function CompanyDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { placement, eligibleStudents, studentId } = location.state || {};
  const [isOptedIn, setIsOptedIn] = useState(false);
  const [isOptedOut, setIsOptedOut] = useState(false);

  if (!placement) {
    return <div>No company data available.</div>;
  }

  const isEligible = eligibleStudents ? eligibleStudents.includes(studentId) : false;

  const handleOptIn = async () => {
    const confirmation = window.confirm('Are you sure you want to opt-in?');
    if (confirmation) {
      try {
        const response = await fetch(`https://devsquad-api.onrender.com/api/company/opt-status/${studentId}/${placement.companyId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ opted_status: 'optin' })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Update UI state
        setIsOptedIn(true);
        setIsOptedOut(false);

      } catch (error) {
        console.error('Error opting in:', error); // More detailed error logging
      }
    }
  };

  const handleOptOut = async () => {
    const confirmation = window.confirm('Are you sure you want to opt-out?');
    if (confirmation) {
      try {
        const response = await fetch(`https://devsquad-api.onrender.com/api/company/opt-status/${studentId}/${placement.companyId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ opted_status: 'optout' })
        });

        if (response.ok) {
          // Update UI state
          setIsOptedOut(true);
          setIsOptedIn(false);
        } else {
          console.error('Failed to opt-out');
        }
      } catch (error) {
        console.error('Error opting out:', error);
      }
    }
  };

  return (
    <>
      <Link to='/dashboard/studentplacementdetails'>
        <ArrowLeftCircleIcon className='w-10 h-10 relative left-5 top-5'/>
      </Link>
      <div className="bg-white p-6 w-3/4 mx-auto my-10 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{placement.companyName}</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-gray-600 mr-2" />
            <span>{placement.companyLocation}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-gray-600 mr-2" />
            <span>{new Date(placement.driveDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-bold mb-2">Roles and Salaries:</p>
          {placement.rolesAndSalary.map((role, index) => (
            <div key={index} className="flex justify-between">
              <span>{role.role}</span>
              <span className="flex items-center">
                <CurrencyRupeeIcon className="h-5 w-5 text-gray-500 mr-1" />
                {role.salary} PA
              </span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-bold mb-2">Eligibility Criteria:</p>
          <p>10th Marks: {placement.eligibilityCriteria.minTenthMarks}%</p>
          <p>12th Marks: {placement.eligibilityCriteria.minTwelfthMarks}%</p>
          <p>CGPA: {placement.eligibilityCriteria.minCGPA}</p>
          <p>No History of Arrears: {placement.eligibilityCriteria.noHistoryOfArrears ? 'Yes' : 'No'}</p>
          <p>Max Arrears: {placement.eligibilityCriteria.maxArrears}</p>
        </div>

        <div className="mb-4">
          <p className="font-bold mb-2">Technical Skills Required:</p>
          {placement.techStackEligibility.isTechStackRequired ? (
            <ul>
              {placement.techStackEligibility.requiredSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No specific tech stack required</p>
          )}
        </div>

        <div className="mb-4">
          <p className="font-bold mb-2">Rounds:</p>
          {placement.roundDetails.map((round, index) => (
            <div key={index}>
              <p>Round {round.roundNumber}: {round.description}</p>
              <p>Venue: {round.venue}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="font-bold mb-2">Eligible Departments:</p>
          <ul>
            {placement.eligibleDepartments.map((dept, index) => (
              <li key={index}>{dept}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4 flex justify-center">
  {isEligible ? (
    placement.optedStudents.includes(studentId) || isOptedIn ? (
      <p className="text-green-500 font-bold">Opted-In</p>
    ) : placement.optedOutStudents.includes(studentId) || isOptedOut ? (
      <p className="text-red-500 font-bold">Opted-Out</p>
    ) : (
      <>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg" 
          onClick={handleOptIn}
        >
          Opt-In
        </button>
        <button 
          className="bg-white text-black border-2 border-gray-400 px-4 py-2 rounded-lg ml-4" 
          onClick={handleOptOut}
        >
          Opt-Out
        </button>
      </>
    )
  ) : (
    <p className="text-red-500 font-bold">Not Eligible</p>
  )}
</div>


      </div>
    </>
  );
}

export default CompanyDetail;
