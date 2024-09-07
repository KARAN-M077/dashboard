export const authorsTableData = {
  about: {
    description: "As a college student, I embrace the dual roles of scholar and seeker, delving into the depths of knowledge while exploring the wonders of the world.",
    contact: {
      name: "John Michael",
      phone: "+91 8072711138",
      email: "akshay.profes@gmail.com",
      birthday: "31/05/2002"
    }
  },
  skillRepository: {
    roleBasedSkills: [
      { skill: "Product Management", endorsements: 3 },
      { skill: "Product Designing", endorsements: 3 },
      { skill: "UX Design", endorsements: 2 },
      { skill: "UI Designing", endorsements: 3 },
      { skill: "Website Development", endorsements: 2 },
      { skill: "Google Ads", endorsements: 2 },
      { skill: "Facebook Ads", endorsements: 1 },
      { skill: "Email Marketing", endorsements: 2 },
      { skill: "Growth Hacking", endorsements: 3 },
      { skill: "Social Media Management", endorsements: 1 },
      { skill: "Marketing Strategy", endorsements: 1 }
    ],
    interestBasedSkills: [
      { skill: "Cyber Security", endorsements: 2 },
      { skill: "E-commerce Management", endorsements: 2 },
      { skill: "Project Management", endorsements: 1 },
      { skill: "Human Resource Management", endorsements: 2 },
      { skill: "Sales", endorsements: 1 }
    ]
  },
  education: {
    institution: "ABC College of Technology",
    degree: "BE in Mechanical Engineering, Automotive Design",
    duration: "Mar 2018 - Apr 2021",
    activities: [
      "Selected as a Placement Representative & Event Manager for my Department.",
      "Received Best Alumni Award."
    ]
  },
  img: "/img/team-2.jpeg",
  projects: [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce application built with React.js, featuring a cart system and category separation for Men, Women, and Kids.",
      technologies: ["React.js", "Redux", "Material-UI", "Tailwind CSS"],
      project_url: "https://github.com/yourusername/e-commerce-platform"
    },
    {
      title: "Image Classification Model",
      description: "A machine learning project for image classification using a combination of manual feature extraction and a pre-trained ResNet model with a custom classifier.",
      technologies: ["Python", "TensorFlow", "ResNet", "Scikit-learn"],
      project_url: "https://github.com/yourusername/image-classification-model"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information, built with React.js and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS"],
      project_url: "https://github.com/yourusername/portfolio-website"
    }
  ],
  linkedin_profile: "https://www.linkedin.com/in/yourusername",
  leetcode_profile: "https://leetcode.com/yourusername"
};

export default authorsTableData;
