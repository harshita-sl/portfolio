import image1 from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

export const resumeData = {
  header: {
    name: "Harshita Sharma",
    links: [
      { label: "GitHub", text: "harshita-sl", url: "https://github.com/harshita-sl" },
      { label: "LinkedIn", text: "Harshita Sharma", url: "https://linkedin.com/in/harshita-slr" },
      { label: "Email", text: "harshitas@iitbhilai.ac.in", url: "mailto:harshitas@iitbhilai.ac.in" },
      { label: "Phone", text: "+91 9990379497", url: "tel:+919990379497" }
    ],
    codingProfiles: [
      { platform: "Codeforces", handle: "harshitas", url: "#" },
      { platform: "LeetCode", handle: "starbus", url: "#" }
    ]
  },
  skills: {
    "Languages": ["Python", "C", "C++"],
    "Robotics": ["ROS2", "Gazebo", "PX4", "Blender", "Pixhawk"],
    "ML": ["NumPy", "Pandas", "scikit-learn"],
    "OS/Tools": ["Ubuntu", "Windows", "Git", "Raspberry Pi"]
  },
  education: [
    {
      period: "2024 - 2028",
      degree: "BTech, Mechanical Engineering",
      institution: "IIT Bhilai",
      score: "Best SG: 8.6 | CGPA: 8.39"
    }
  ],
  experience: [
    {
      period: "May 2026 - Present",
      title: "AI Engineer Intern",
      institution: "APTransco (Transmission Corporation of Andhra Pradesh)",
      badge: "2 Months",
      link: { text: "Project Repo", url: "https://github.com/harshita-sl/Demand-Forecasting" },
      bullets: [
        "Developing advanced short-term (day-ahead, intra-day) and medium-term demand forecasting models using deep learning architectures (LSTMs, Transformer networks).",
        "Incorporating weather patterns, festivals, agricultural pump-set schedules, industrial load cycles, and socio-economic indicators specific to Andhra Pradesh to capture non-linear patterns.",
        "Integrating probabilistic forecasting to compute confidence intervals, helping State Load Despatch Center (SLDC) operators make risk-informed scheduling decisions.",
        "Delivering multi-horizon forecasting models, feature importance analyses, regional load-clustering studies, and a real-time forecast dashboard to reduce over/under-procurement and improve grid stability."
      ],
      techStack: ["Deep Learning", "LSTMs", "Transformers", "Time Series Forecasting", "Python", "Pandas", "scikit-learn"]
    }
  ],
  projects: [
    {
      title: "Autonomous Precision Landing of Quadrotor on Aruco Marker",
      video: `${import.meta.env.BASE_URL}videos/drone_video.mp4`,
      link: { text: "View Repo", url: "https://github.com/harshita-sl/QUAD" },
      bullets: [
        "Developed and tested autonomous flight control algorithms for vision-based precision landing using ArUco marker detection",
        "Designed and assembled quadrotor hardware with Pixhawk 2.4.8 flight controller and Raspberry Pi 5 companion computer",
        "Created comprehensive simulation environment using PX4-Autopilot, Gazebo Classic, ROS2 Humble, and MAVROS for algorithm validation before hardware deployment"
      ],
      techStack: ["PX4-autopilot", "MAVROS", "Qgroundcontrol", "Pixhawk 2.4.8", "Raspberry pi5", "Depth camera"]
    },
    {
      title: "Lexa – Indian Languages Learning Platform",
      link: {
        text: "View Repo",
        url: "https://github.com/harshita-sl/Lexa-The-Indian-languages-learning-app"
      },
      bullets: [
        "Building a modern web application to help users learn Indian languages through interactive lessons, quizzes, and gamified learning experiences.",
        "Developing a responsive frontend using Next.js and React with reusable UI components, intuitive navigation, and mobile-friendly design.",
        "Designing the application architecture with scalability in mind, with plans to integrate user authentication, progress tracking, and personalized learning recommendations."
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Renewable Energy Forecasting",
      link: { text: "Notebook", url: "https://colab.research.google.com/drive/1Hi4VGPhml-yeZCdJ-J-flO6Slm-8rWC9?usp=sharing" },
      bullets: [
        "Performed data preprocessing and feature engineering on time-series renewable energy dataset.",
        "Conducted comparative analysis of solar vs wind energy generation, identifying seasonal trends and relationships with temperature and wind speed.",
        "Visualized trends using Matplotlib and Seaborn, including temporal plots and correlation analysis.",
        "Provided insights useful for renewable energy planning and power plant optimization, addressing variability in energy supply."
      ],
      techStack: ["Numpy", "Pandas", "scikit-learn", "matplotlib", "seaborn"]
    },
    {
      title: "Asteroid Risk Classification",
      link: { text: "Notebook", url: "https://github.com/harshita-sl/Aestroid-risk-classification" },
      bullets: [
        "Developed a machine learning model to classify asteroids as hazardous or non-hazardous based on orbital and physical parameters.",
        "Implemented and compared Random Forest and XGBoost models, achieving highest accuracy of 82% using XGBoost.",
        "Improved minority class detection (hazardous asteroids), achieving recall up to 48%."
      ],
      techStack: ["XG Boost", "Matplotlib", "Seaborn", "Classification Models"]
    }
    
  ],
  achievements: [
    {
      title: "First Position - Asteroid Risk Classification Challenge",
      link: { text: "View", url: "https://drive.google.com/file/d/1l83uT1A3sAl7XuszbaDF4CXPE8DsYHS8/view?usp=sharing" },
      description: "Winner of Intra-IIT Machine Learning Challenge. Developed classification model using advanced feature engineering, model selection, and hyperparameter optimization techniques."
    },
    {
      title: "Third Position - Summer ChainRxn Bootcamp",
      link: { text: "View", url: "https://github.com/harshita-sl/Chainrxn-pro2" },
      description: "Secured third position in web development bootcamp. Developed animated front-end landing page with modern UI/UX principles."
    },
    {
      title: "MATLAB Machine Learning Certifications",
      link: { text: "Cert 1 - Cert 2", url: "https://drive.google.com/file/d/1eXbDWYWbxcrEo7zbfEG7qiFdG-yqNsmu/view?usp=sharing" },
      description: "Completed MATLAB Machine Learning Onramp and Classification Models specialized courses."
    },
    {
      title: "Core Member - Blockchain Society (BIB)",
      link: { text: "IIT Bhilai", url: "#" },
      description: "Core member of Blockchain at IIT Bhilai technical society. Organized workshops and hackathons."
    },
    {
      title: "Maintainer - OpenLake",
      link: { text: "IIT Bhilai", url: "#" },
      description: "Maintainer of the student-led open-source development club at IIT Bhilai. Mentored juniors, managed university-wide projects, and promoted open-source culture on campus."
    }
  ],
  simulations: [
    {
      title: "Blender Simulation",
      description: "Explore my 3D Blender simulation projects, including animations and stylized 3D environment renders.",
      instagram: "https://www.instagram.com/3d__dreamer_/",
      gallery: [
        { type: 'image', src: image1 },
        { type: 'image', src: image2 },
        { type: 'image', src: image3 },
        { type: 'video', src: `${import.meta.env.BASE_URL}videos/vi1.mp4` },
        { type: 'video', src: `${import.meta.env.BASE_URL}videos/vi2.mp4` }
      ]
    }
  ]
};
