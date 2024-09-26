import React, { useState, useRef, useEffect, } from "react";
import axios from "axios";
import { Bars3Icon, XMarkIcon, UserCircleIcon, PencilSquareIcon, ArrowRightOnRectangleIcon, PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Correct path and icons
import { Link, Navigate, useNavigate } from "react-router-dom";
import useFecthResume from "../../Hooks/useFetchResume";
function StudentExperience() {
  const [error, setError] = useState(null);
  const [studentName, setStudentName] = useState("");
  const {resumeData}=useFecthResume();


  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    technologies: '',
    duration: '',
  });
  const handleAddMoreClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const studentId = userData?.studentId;
    try {
      await axios.post(`https://devsquad-api.onrender.com/api/resume/add-experience/${studentId}`, formData);
      // Clear form data or handle success feedback here
      setFormData({
        company: '',
        role: '',
        technologies: '',
        duration: '',
      });
      setIsFormOpen(false);
      // Optionally, refetch resume data or update the UI to reflect the new experience
    } catch (error) {
      console.error('Error adding experience:', error);
      // Handle error feedback here
    }
  };
  const handleDeleteExperience = async (experienceId) => {
    try {
      const studentId = resumeData.studentId; // Ensure you have studentId available
      const response = await axios.delete(`https://devsquad-api.onrender.com/api/resume/delete-experience/${studentId}/${experienceId}`);

      if (response.status === 200) {
        console.log('Experience deleted successfully');
        // Update the state to remove the deleted experience from the list
        const updatedExperiences = resumeData.experience.filter((exp) => exp._id !== experienceId);
        setResumeData({ ...resumeData, experience: updatedExperiences });
      } else {
        console.error('Failed to delete experience');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="flex flex-row ">
        <p className="text-lg font-bold mb-2 text-left">
          Experience
          </p>
          <button onClick={handleAddMoreClick} className="absolute flex right-14 font-bold text-lg z-[1]">
            {isFormOpen ? 'Cancel' : 'Add More'}
          </button>
        
      </div>

      <div className="lg:w- p-4 shadow-lg rounded-lg bg-white lg:h-auto lg:min-w-full">
        <div className="h-auto grid lg:gap-y-10">
          {resumeData && resumeData.experience && resumeData.experience.length > 0 ? (
            <ul>
              {resumeData.experience.map((exp) => (
                <div key={exp._id} className="grid gap-y-3 border-2 border-gray-100 p-4 rounded-md">
                  <p><strong>Company Name: </strong>{exp.company}</p>
                  <p><strong>Role: </strong>{exp.role}</p>
                  <p><strong>Duration: </strong>{exp.duration}</p>
                  <p><strong>Technologies: </strong>{exp.technologies.join(', ')}</p>
                  <button
                    onClick={() => handleDeleteExperience(exp._id)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Edit Your Profile To Add Data</p>
          )}
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-9 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Experience
              </button>
            </form>
          )}
        </div>
      </div>

    </>
  );
}
export default StudentExperience;