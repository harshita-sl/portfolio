import image1 from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

export const resumeData = {
  header: {
    name: "Harshita Sharma",
    links: [
      { label: "GitHub", text: "harshita-sl", url: "https://github.com/harshita-sl" },
      { label: "LinkedIn", text: "Harshita Sharma", url: "https://linkedin.com/in/harshita-sharma" },
      { label: "Email", text: "harshitas@iitbhilai.ac.in", url: "mailto:harshitas@iitbhilai.ac.in" },
      { label: "Phone", text: "+91 9990379497", url: "tel:+919990379497" }
    ],
    codingProfiles: [
      { platform: "Codeforces", handle: "harshitas", url: "#" },
      { platform: "LeetCode", handle: "starbus", url: "#" }
    ]
  },
  skills: {
    "Languages": ["Python", "C++", "C", "SQL"],
    "Quantitative / ML": ["Time-Series Forecasting", "Statistical Modeling", "Feature Engineering", "Gradient Boosting", "LSTMs & Transformers", "Scikit-learn", "PyTorch", "TensorFlow"],
    "Data & Tooling": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter/Colab", "Git"],
    "Systems": ["Linux (Ubuntu)", "ROS2", "Gazebo", "PX4", "MAVROS", "Pixhawk", "Raspberry Pi"]
  },
  education: [
    {
      period: "2024 - 2028",
      degree: "BTech, Mechanical Engineering",
      institution: "IIT Bhilai",
      score: "CGPA: 8.29"
    }
  ],
  experience: [
    {
      period: "2026 - Present",
      title: "AI Engineer Intern",
      institution: "APTransco (State Load Dispatch Centre)",
      badge: "Current",
      link: { text: "Project Repo", url: "https://github.com/harshita-sl/Demand-Forecasting" },
      bullets: [
        "Build short-horizon forecasting models (LSTM, Transformer) on high-frequency demand time-series, benchmarked against statistical and gradient-boosted baselines with walk-forward, out-of-sample evaluation.",
        "Engineer predictive features from noisy multi-source signals – weather, festival calendars, agricultural pump usage, industrial load cycles – and quantify each one's marginal contribution to forecast error.",
        "Mine statewide consumption data for recurring load patterns and regime shifts, isolating the systematic drivers of demand variability and over/under-procurement.",
        "Run reproducible Python research workflows on Linux and translate model output into scheduling recommendations for non-technical grid operators."
      ],
      techStack: ["Python", "Linux", "PyTorch", "TensorFlow", "LSTM", "Transformer", "Pandas", "NumPy", "Time-Series Analysis"]
    }
  ],
  projects: [
    {
      id: "gridlock-hackathon",
      title: "Gridlock Hackathon — Traffic Demand Prediction (Flipkart)",
      link: null,
      domain: "ML · Forecasting",
      context: "Flipkart Gridlock Hackathon · 3rd Position",
      bullets: [
        "Built a stacked ensemble of LightGBM, XGBoost, and CatBoost to forecast city-wide traffic demand in Bangalore, reaching an OOF R² of 95.43 under a leakage-free cross-validation setup.",
        "Engineered lag, rolling-window, and cyclical time features from spatiotemporal data; used out-of-fold predictions as meta-features to cut variance across the blend.",
        "Placed 3rd in a time-boxed hackathon: framed an open-ended problem, shipped a working solution under deadline pressure, and defended the approach to judges."
      ],
      techStack: ["Python", "LightGBM", "XGBoost", "CatBoost", "Pandas", "NumPy"],
      caseStudy: {
        problem: "Forecast city-wide traffic demand across Bangalore from spatiotemporal data, inside a fixed hackathon window — the constraint wasn't just accuracy, it was getting a leakage-free, defensible model built and validated before the clock ran out.",
        built: "A stacked ensemble of LightGBM, XGBoost, and CatBoost, fed lag, rolling-window, and cyclical time features engineered from the raw spatiotemporal signal, with out-of-fold predictions from the base models used as meta-features going into the blend.",
        decision: "Used a leakage-free, out-of-fold cross-validation setup rather than a simpler train/test split — stacking is easy to accidentally leak information through if the base-model predictions used as meta-features were seen during their own training.",
        simGap: "There's no simulator here — the equivalent constraint was the clock. Every hour spent on model architecture was an hour not spent validating the CV setup, and the model that ultimately placed had to be explained and defended to judges on the spot, not just scored offline.",
        landed: "An OOF R² of 95.43 and 3rd position overall — the stacked ensemble held up under the leakage-free evaluation and the approach survived being questioned live."
      }
    },
    {
      id: "asteroid-risk",
      title: "Asteroid Risk Classification",
      link: { text: "Notebook", url: "https://colab.research.google.com/drive/1FRw6fwIQ8R711dM7VIZPZESYOUsXBIrf" },
      domain: "ML · Classification",
      context: "Intra-IIT ML Challenge · 1st Position",
      bullets: [
        "Won 1st position in an Intra-IIT ML Challenge: classified asteroids as hazardous vs. non-hazardous from orbital and physical features on a heavily imbalanced dataset.",
        "Compared Random Forest against XGBoost, trading overall accuracy (82%) against hazardous-class recall to pick the model with the right error profile for an asymmetric-cost decision."
      ],
      techStack: ["Python", "Scikit-learn", "Random Forest", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
      caseStudy: {
        problem: "Classify asteroids as hazardous or non-hazardous from orbital and physical parameters, on a dataset where hazardous asteroids are a small, heavily imbalanced minority — missing one is far more costly than a false alarm.",
        built: "A classification pipeline comparing Random Forest against XGBoost, with feature engineering on the orbital and physical parameters and evaluation focused specifically on the hazardous-class recall rather than raw accuracy.",
        decision: "Picked the model by trading overall accuracy (82%) against hazardous-class recall, rather than optimizing for accuracy alone — on an imbalanced, asymmetric-cost problem like this, the model that's 'more accurate' on paper can still be the wrong one to ship.",
        simGap: "No hardware-in-the-loop gap here — the equivalent lesson was that the metric that looks best in a leaderboard isn't automatically the one that matches the real cost of getting it wrong.",
        landed: "1st position in the Intra-IIT ML Challenge, built on advanced feature engineering, model selection, and hyperparameter optimization."
      }
    },
    {
      id: "renewable-forecasting",
      title: "Renewable Energy Forecasting",
      link: { text: "Notebook", url: "https://colab.research.google.com/drive/1Hi4VGPhml-yeZCdJ-J-flO6Slm-8rWC9?usp=sharing" },
      domain: "ML · Time Series",
      context: "Independent analysis",
      bullets: [
        "Analyzed solar and wind generation time-series against temperature and wind-speed covariates, extracting seasonality, trend, and regime-shift structure from the signal.",
        "Ran preprocessing, feature engineering, and correlation analysis to identify which covariates carry genuine predictive signal, and communicated findings through visualizations."
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Google Colab"],
      caseStudy: {
        problem: "Renewable generation is inherently variable — understand how solar and wind output actually move with temperature and wind speed, and surface which of those covariates carry real predictive signal versus noise.",
        built: "A time-series analysis pipeline: preprocessing and feature engineering on the raw generation data, comparative analysis of solar versus wind seasonal trends, and correlation analysis against temperature and wind speed.",
        decision: "Prioritized correlation and seasonality analysis over jumping straight to a forecasting model — understanding which covariates actually carry signal has to come before trusting any model built on top of them.",
        simGap: "This was analysis, not deployment — the open question this project leaves is whether the same seasonal structure holds up in a live forecasting pipeline the way it does in a historical dataset.",
        landed: "A set of visualized seasonal and covariate-correlation findings useful for renewable energy planning and power-plant optimization, addressing supply variability."
      }
    },
    {
      id: "precision-landing",
      title: "Autonomous Precision Landing of Quadrotor on ArUco Marker",
      video: `${import.meta.env.BASE_URL}videos/drone_video.mp4`,
      link: { text: "View Repo", url: "https://github.com/harshita-sl/Autonomous_quad_landing" },
      domain: "Robotics · Controls",
      context: "Independent build, IIT Bhilai",
      bullets: [
        "Delivered a real-time perception-to-control pipeline (marker detection → pose estimate → setpoint command) running under latency constraints on embedded hardware.",
        "Integrated PX4, Gazebo, ROS2 Humble, MAVROS, Pixhawk 2.4.8, and Raspberry Pi 5 on Linux; validated in simulation before deploying to the physical build."
      ],
      techStack: ["PX4", "ROS2 Humble", "Gazebo", "MAVROS", "OpenCV (ArUco)", "Pixhawk 2.4.8", "Raspberry Pi 5", "Python", "Linux"],
      caseStudy: {
        problem: "Land a quadrotor precisely on a marked target with no human in the loop — GPS-grade positioning isn't precise enough for a controlled touchdown, so the drone has to see the marker and correct itself on the way down.",
        built: "A perception-to-control pipeline: a downward camera feed runs ArUco marker detection, the marker's pose is converted into a position error relative to the drone, and that error is sent to PX4 as a stream of setpoint commands over MAVROS — closing the loop entirely onboard.",
        decision: "Ran the full pipeline in Gazebo against PX4's SITL before touching hardware, rather than iterating directly on the physical build — flight-control bugs are expensive and slow to debug when a mistake costs a propeller or a bent frame.",
        simGap: "Simulation doesn't have to deal with camera exposure shifting as the drone descends, marker detection dropping frames under real lighting, or the round-trip latency between a detection and the setpoint actually reaching the flight controller. Those constraints only became visible once the pipeline moved from Gazebo onto the Pixhawk 2.4.8 and Raspberry Pi 5, and they're what ended up shaping how the setpoint loop was tuned.",
        landed: "A working sim-to-hardware pipeline: PX4 + Gazebo Classic + ROS2 Humble + MAVROS for validation, Pixhawk 2.4.8 and Raspberry Pi 5 as the onboard compute for the physical descent-and-land sequence."
      }
    }
  ],
  achievements: [
    {
      title: "Maintainer — OpenLake",
      link: { text: "IIT Bhilai", url: "https://github.com/OpenLake" },
      description: "Lead open-source project maintenance, review contributions, and coordinate a distributed team of contributors at IIT Bhilai's student-led open-source club."
    },
    {
      title: "Core Member — Blockchain Society (BIB)",
      link: { text: "IIT Bhilai", url: "#" },
      description: "Organize technical workshops and hackathons end-to-end — logistics, speakers, and participants — while running multiple events in parallel."
    },
    {
      title: "Third Position — Summer ChainRxn Bootcamp",
      link: { text: "View", url: "#" },
      description: "Designed and built an animated front-end landing page with a team under competition deadlines."
    },
    {
      title: "MATLAB Machine Learning Certifications",
      link: { text: "Cert 1 - Cert 2", url: "#" },
      description: "Completed MATLAB Machine Learning Onramp and Classification Models specialized courses."
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
