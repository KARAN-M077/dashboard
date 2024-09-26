import React, { useState, useRef, useEffect, } from "react";
import axios from "axios";
//import { Bars3Icon, XMarkIcon, UserCircleIcon, PencilSquareIcon, ArrowRightOnRectangleIcon, PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Correct path and icons
import useFecthResume from "../../Hooks/useFetchResume";

import { Link, Navigate, useNavigate } from "react-router-dom";
function StudentProject() {
  const {resumeData}=useFecthResume();

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

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProjectFormVisible, setIsProjectFormVisible] = useState(false);
  const [projectFormData, setProjectFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    project_url: '',
    git_hub_url: '',
  });

  const handleToggleProjectForm = () => {
    setIsProjectFormVisible(!isProjectFormVisible);
  };

  const handleProjectFormChange = (e) => {
    setProjectFormData({
      ...projectFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectFormSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const studentId = userData?.studentId;
    const newProject = {
      title: projectFormData.title,
      description: projectFormData.description,
      technologies: projectFormData.technologies.split(',').map(tech => tech.trim()),
      project_url: projectFormData.project_url,
      git_hub_url: projectFormData.git_hub_url,
    };

    try {
      const response = await axios.post(
        `https://devsquad-api.onrender.com/api/resume/add-project/${studentId}`,
        newProject
      );

      console.log('Project added successfully', response.data);

      // Update resumeData to reflect the new project
      setResumeData(prevData => ({
        ...prevData,
        projects: [...prevData.projects, response.data.project] // Assuming API returns the added project
      }));

      // Reset the form after successful submission
      setProjectFormData({
        title: '',
        description: '',
        technologies: '',
        project_url: '',
        git_hub_url: '',
      });

      setIsProjectFormVisible(false); // Hide the form after submission
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };


 


  const handleDeleteProject = async (projectId) => {
    try {
      const studentId = resumeData.studentId; // Ensure you have studentId available
      const response = await axios.delete(`https://devsquad-api.onrender.com/api/resume/delete-project/${studentId}/${projectId}`);

      if (response.status === 200) {
        console.log('Project deleted successfully');
        // Update the state to remove the deleted project from the list
        const updatedProjects = resumeData.projects.filter((project) => project._id !== projectId);
        //setResumeData({ ...resumeData, projects: updatedProjects });
      } else {
        console.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <div className="flex flex-row">

      <p className="text-lg font-bold mb-2 text-left">
        Projects
        </p>
        <button
          className="absolute flex right-14 font-bold text-lg"
          onClick={handleToggleProjectForm}
          >
          {isProjectFormVisible ? 'Cancel' : 'Add More'}
        </button>
          </div>
     
      <div className="lg:w-full p-4 shadow-lg rounded-lg bg-white lg:h-auto">
        <div className="space-y-4 h-auto">
          {resumeData && resumeData.projects && resumeData.projects.length > 0 ? (
            <ul>
              <div className="grid gap-y-3">
                {resumeData.projects.map((project) => (
                  <li key={project._id} className="border-2 border-gray-100 pb-2 rounded-lg p-2">
                    <h3 className="text-xl font-semibold">{project.title || "Untitled Project"}</h3>
                    <p className="text-sm mt-1">{project.description || "No description available"}</p>
                    <p className="text-sm mt-1">
                      <strong>Technologies:</strong> {project.technologies?.join(', ') || "No technologies listed"}
                    </p>
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        className="text-blue-600 underline mt-2 block w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                    {project.git_hub_url && (
                      <a
                        href={project.git_hub_url}
                        className="text-blue-600 underline mt-2 block w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="text-red-600 hover:text-red-800 mt-2"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </div>
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Edit Your Profile To Add Data</p>
          )}
          {isProjectFormVisible && (
            <form onSubmit={handleProjectFormSubmit} className="space-y-4 mt-4">
              <input
                type="text"
                name="title"
                value={projectFormData.title}
                onChange={handleProjectFormChange}
                className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Project Title"
                required
              />
              <textarea
                name="description"
                value={projectFormData.description}
                onChange={handleProjectFormChange}
                className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Project Description"
                required
              />
              <input
                type="text"
                name="technologies"
                value={projectFormData.technologies}
                onChange={handleProjectFormChange}
                className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Technologies (comma separated)"
                required
              />
              <input
                type="url"
                name="project_url"
                value={projectFormData.project_url}
                onChange={handleProjectFormChange}
                className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Project URL"
                required
              />
              <input
                type="url"
                name="git_hub_url"
                value={projectFormData.git_hub_url}
                onChange={handleProjectFormChange}
                className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="GitHub URL"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
export default StudentProject;