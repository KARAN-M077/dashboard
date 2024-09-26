import React, { useState, useRef, useEffect, } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircleIcon, CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline'; // Correct path and icons

function StudentAbout() {
    const [resumeData, setResumeData] = useState({});
    const [error, setError] = useState(null);
    const [studentName, setStudentName] = useState("");
    const [skillsState, setSkillsState] = useState([]);
    const [activeSkillIndex, setActiveSkillIndex] = useState(null);
    const [newSkill, setNewSkill] = useState('');
    const [showAddSkillForm, setShowAddSkillForm] = useState(false);
    const [interests, setInterests] = useState([]);
    const [newInterest, setNewInterest] = useState('');
    const [showInputField, setShowInputField] = useState(false);
    
    const navigate = useNavigate();
    const popupRef = useRef(null);

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const studentId = parsedData.studentId;
            setStudentName(parsedData.name);
            fetchResume(studentId);
        }
    }, []);

    const fetchResume = async (studentId) => {
        try {
            const response = await axios.get(`https://devsquad-api.onrender.com/api/resume/get-resume/${studentId}`);
            if (response.data.resume) {
                setResumeData(response.data.resume);
                const initialSkillsState = response.data.resume.skills.map(skill => skill.test_result === "passed" ? true : false);
                setSkillsState(initialSkillsState);
                setInterests(response.data.resume.area_of_interest || []);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to fetch resume data.');
            } else {
                setError('An error occurred while fetching the resume data.');
            }
        }
    };

    // Handle skill click to toggle the active skill index
    const handleSkillClick = (index) => {
        setActiveSkillIndex(index === activeSkillIndex ? null : index);
    };

    const handleVerifyClick = () => {
        const newSkillsState = [...skillsState];
        newSkillsState[activeSkillIndex] = true;
        setSkillsState(newSkillsState);
        setActiveSkillIndex(null);
    };

    // Handle adding new skill
    const handleAddSkill = async () => {
        if (!newSkill.trim()) return; // Prevent empty skill submission

        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const studentId = userData?.studentId;
            const response = await axios.post(
                `https://devsquad-api.onrender.com/api/resume/add-skill/${studentId}`,
                {
                    skill_name: newSkill,
                    test_result: 'pending', // Default test result
                    level: '',
                }
            );
            
            // After successfully adding the skill, update the state to reflect the change
            setResumeData(prevState => ({
                ...prevState,
                skills: [...prevState.skills, { skill_name: newSkill, test_result: 'pending' }]
            }));
            setSkillsState([...skillsState, false]);
            setNewSkill(''); // Clear input field
            setShowAddSkillForm(false); // Close the form
        } catch (error) {
            console.error('Error adding skill:', error);
        }
    };

    // Handle adding new interest
    const handleAddInterest = async () => {
        if (!newInterest.trim()) return; // Prevent adding empty interests

        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const studentId = userData?.studentId;
            const response = await axios.post(`https://devsquad-api.onrender.com/api/resume/add-interest/${studentId}`, {
                area_of_interest: newInterest,
            });

            if (response.status === 200) {
                setInterests([...interests, newInterest]);
                setNewInterest('');
                setShowInputField(false);
            } else {
                console.error('Failed to add interest');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdateInterests = async (studentId, interestToRemove) => {
        try {
            const response = await axios.patch(
                `https://devsquad-api.onrender.com/api/resume/delete-interest/${studentId}`,
                { area_of_interest: interestToRemove }
            );

            if (response.status === 200) {
                setInterests(interests.filter((interest) => interest !== interestToRemove));
            } else {
                console.error('Failed to update interests');
            }
        } catch (error) {
            console.error('Error:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="lg: min-w-[30%] p-4 bg-white shadow-lg rounded-lg lg:h-fit">
            {/* About Section */}
            <p className="text-lg font-bold mb-2">About</p>
            <div className="mb-6 p-6 border-2 border-gray-100 rounded-lg">
                {resumeData.about_me ? (
                    <div className="relative flex flex-col items-start">
                        <div className="h-12 w-12 bg-orange-500 text-white rounded-full flex items-center justify-center mb-2">
                            <span className="text-2xl font-bold">{studentName.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{studentName}</p>
                            <p className="text-sm text-gray-800">{resumeData.about_me}</p>
                            <p className="text-sm text-gray-800"><strong className="font-bold">Batch: </strong>{resumeData.batchId}</p>
                            <p className="text-sm text-gray-800"><strong className="font-bold">Department: </strong>{resumeData.department}</p>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-700">Connect with me:</p>
                                <ul className="mt-2 space-y-2">
                                    {resumeData.linkedin_profile && (
                                        <li className="flex items-center space-x-2">
                                            <a
                                                href={resumeData.linkedin_profile}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LinkedIn
                                            </a>
                                        </li>
                                    )}
                                     {resumeData.leetcode_profile && (
                                        <li className="flex items-center space-x-2">
                                            <a
                                                href={resumeData.leetcode_profile}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LeetCode
                                            </a>
                                        </li>
                                    )}
                                    {resumeData.portfolio_url && (
                                        <li className="flex items-center space-x-2">
                                            <a
                                                href={resumeData.portfolio_url}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Portfolio
                                            </a>
                                        </li>
                                    )}
                                    {resumeData.git_hub_url && (
                                        <li className="flex items-center space-x-2">
                                            <a
                                                href={resumeData.git_hub_url}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-gray-500">Edit Your Profile To Add Data</p>
                )}
            </div>

            {/* Skill Repository Section */}
            <p className="text-lg font-bold mb-4">Skill Repository</p>
            <div className="mb-6 p-4 border-2 border-gray-100 rounded-lg">
                {resumeData.skills && resumeData.skills.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-3 gap-x-3">
                        {resumeData.skills.map((skill, index) => (
                            <div key={index} className="relative">
                                <div
                                    className={`p-2 border-2 border-gray-300 shadow-md rounded-lg flex items-center cursor-pointer ${skillsState[index] ? 'bg-white' : 'bg-gray-200 opacity-50'
                                        }`}
                                    onClick={() => handleSkillClick(index)}
                                >
                                    <div className="h-8 w-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold">{skill.skill_name.charAt(0)}</span>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-xs font-semibold">{skill.skill_name}</p>
                                        <p className="text-xs text-gray-500">Test: {skill.test_result}</p>
                                    </div>
                                </div>
                                {activeSkillIndex === index && !skillsState[index] && (
                                    <div ref={popupRef} className="absolute w-full -top-14 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-md p-2">
                                        <p className="text-sm">Verify to Activate</p>
                                        <Link
                                            to='/TakeTestPage'
                                            className="flex items-center text-sm text-blue-600"
                                        >
                                            <span>Take Test</span>
                                            <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No skills found.</p>
                )}
                <div className="mt-4">
                    {!showAddSkillForm ? (
                        <button
                            className="flex items-center text-sm text-blue-600"
                            onClick={() => setShowAddSkillForm(true)}
                        >
                            <PlusCircleIcon className="w-5 h-5 mr-2" />
                            <span>Add Skill</span>
                        </button>
                    ) : (
                        <div className="mt-2">
                            <input
                                className="border-2 border-gray-300 shadow-md rounded-lg w-full py-2 px-3"
                                type="text"
                                placeholder="Enter Skill"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                            />
                            <button
                                className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg"
                                onClick={handleAddSkill}
                            >
                                Add Skill
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Area of Interests Section */}
            <p className="text-lg font-bold mb-4">Area of Interests</p>
            <div className="mb-6 p-4 border-2 border-gray-100 rounded-lg">
                {interests.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {interests.map((interest, index) => (
                            <li key={index} className="flex items-center justify-between mb-2">
                                <span>{interest}</span>
                                <TrashIcon
                                    className="w-4 h-4 text-red-500 cursor-pointer"
                                    onClick={() => handleUpdateInterests(resumeData.studentId, interest)}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No interests added yet.</p>
                )}
                {!showInputField ? (
                    <button
                        className="flex items-center text-sm text-blue-600 mt-2"
                        onClick={() => setShowInputField(true)}
                    >
                        <PlusCircleIcon className="w-5 h-5 mr-2" />
                        <span>Add Interest</span>
                    </button>
                ) : (
                    <div className="mt-2">
                        <input
                            className="border-2 border-gray-300 shadow-md rounded-lg w-full py-2 px-3"
                            type="text"
                            placeholder="Enter Interest"
                            value={newInterest}
                            onChange={(e) => setNewInterest(e.target.value)}
                        />
                        <button
                            className="mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg"
                            onClick={handleAddInterest}
                        >
                            Add Interest
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentAbout;
