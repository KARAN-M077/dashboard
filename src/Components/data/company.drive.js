const placementDriveData = [
    {
      id: 1,
      companyName: "Tech Innovators Ltd.",
      driveDate: new Date("2024-09-15"),
      requirements: ["B.Tech in CS/IT", "Good problem-solving skills", "Knowledge of JavaScript and React"],
      rolesAndSalary: [
        { role: "Software Developer", salary: 80000 },
        { role: "Backend Engineer", salary: 85000 },
      ],
      numberOfRounds: 3,
      companyLocation: "San Francisco, CA",
      roundDetails: [
        { roundNumber: 1, description: "Aptitude Test", venue: "Online" },
        { roundNumber: 2, description: "Technical Interview", venue: "Company Office" },
        { roundNumber: 3, description: "HR Interview", venue: "Company Office" },
      ],
    },
    {
      id: 2,
      companyName: "Creative Solutions Inc.",
      driveDate: new Date("2024-09-20"),
      requirements: ["B.E. in Electronics", "Strong programming background", "Knowledge of Python and Machine Learning"],
      rolesAndSalary: [
        { role: "Data Scientist", salary: 90000 },
        { role: "AI Engineer", salary: 95000 },
      ],
      numberOfRounds: 4,
      companyLocation: "New York, NY",
      roundDetails: [
        { roundNumber: 1, description: "Coding Challenge", venue: "Online" },
        { roundNumber: 2, description: "Technical Round", venue: "Company Office" },
        { roundNumber: 3, description: "Group Discussion", venue: "Company Office" },
        { roundNumber: 4, description: "HR Round", venue: "Company Office" },
      ],
    },
    {
      id: 3,
      companyName: "NextGen Tech Pvt. Ltd.",
      driveDate: new Date("2024-10-05"),
      requirements: ["B.Tech in IT", "Strong knowledge of web development", "Experience with Node.js and MongoDB"],
      rolesAndSalary: [
        { role: "Full Stack Developer", salary: 78000 },
      ],
      numberOfRounds: 2,
      companyLocation: "Bangalore, India",
      roundDetails: [
        { roundNumber: 1, description: "Technical Test", venue: "Online" },
        { roundNumber: 2, description: "Final Interview", venue: "Company Office" },
      ],
    },
  ];
  
  export default placementDriveData;
  