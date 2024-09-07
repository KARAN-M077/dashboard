import React from "react";
import authorsTableData from '../data/user-data';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import './styles.css'

function StudentDetails({ isSidebarOpen, toggleSidebar }) {
  return (
    <>
      <nav className="bg-transparent w-full  flex justify-between items-center">
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

      {/* Wrapping both sections in a flex container that switches between row and column based on screen size */}
      <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:ml-72">
        {/* Left Section: Student Details */}
        <div className="lg:w-1/3 p-4 bg-white shadow-lg rounded-lg lg:h-[87vh] overflow-x-scroll scrollbar-custom">
          <div className="mb-6 p-6 border-2 border-gray-400 rounded-lg">
            <div className="relative flex items-start">
              <img
                src={authorsTableData.img}
                alt={authorsTableData.about.contact.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold">
                  {authorsTableData.about.contact.name}
                </p>
                <p className="text-lg font-bold">About:</p>
                <p className="text-sm text-gray-800">
                  {authorsTableData.about.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-6 p-4 border-2 border-gray-400 rounded-lg">
            <p className="text-lg font-bold mb-4">Skill Repository</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-3 gap-x-3">
              {authorsTableData.skillRepository.roleBasedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-2 border-2 border-gray-300 shadow-md rounded-lg flex items-center w-auto"
                >
                  <div className="flex-shrink-0">
                    <div className="h-4 w-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {skill.skill.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-semibold">{skill.skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Projects and Education */}
        <div className="lg:w-auto lg:ml-44 p-4 shadow-lg rounded-lg bg-white lg:h-[86vh] overflow-y-auto scrollbar-custom ">
          <p className="text-lg font-bold mb-4 text-left">Projects</p>
          <div className="space-y-4 overflow-y-auto scrollbar-custom">
            <ul>
              <div className="grid gap-y-3">
                {authorsTableData.projects.map((project, index) => (
                  <li key={index} className="border-2 border-gray-300 pb-2 rounded-lg p-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm mt-1">{project.description}</p>
                    <p className="text-sm mt-1">
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </p>
                    <a
                      href={project.project_url}
                      className="text-blue-600 underline mt-2 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </li>
                ))}
              </div>
            </ul>
            <div>
              <p className="mt-5 text-lg font-bold mb-4">Education</p>
              <div className="p-4 border-2 border-gray-400 rounded-lg">
                <h3 className="text-lg font-semibold">
                  {authorsTableData.education.institution}
                </h3>
                <p className="text-sm font-medium">{authorsTableData.education.degree}</p>
                <p className="text-sm text-gray-600">{authorsTableData.education.duration}</p>
                <ul className="mt-2 list-disc list-inside">
                  {authorsTableData.education.activities.map((activity, index) => (
                    <li key={index} className="text-sm text-gray-800">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
