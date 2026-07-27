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
      link: { text: "Project Repo" },
      bullets: [
        "Built and compared five architecturally different day-ahead forecasting approaches — gradient-boosted ensembles (LightGBM/CatBoost), a Temporal Fusion Transformer, and an OpenSTEF multi-horizon workflow among them — under one identical walk-forward, out-of-sample evaluation, and shipped the hybrid gradient-boosted ensemble that won.",
        "Engineered 217 leakage-audited features from noisy multi-source signals – weather forecast/actuals, festival and second-Saturday calendars, agricultural lift-irrigation schedules – with a hard assertion that recomputes every lag feature at each fold's cutoff and checks it bit-identical before training.",
        "Hardened the winning model into a live production service against SLDC's operational PostgreSQL database: validated the serving path against the backtest to within 0.05 points of MAPE, stress-tested it against demand-feed outages, and shipped monitoring plus an operator runbook.",
        "Ran reproducible Python research workflows on Linux and translated forecasts into scheduling recommendations non-technical grid operators can act on directly."
      ],
      techStack: ["Python", "Linux", "LightGBM", "CatBoost", "XGBoost", "PyTorch (TFT)", "PostgreSQL", "Pandas", "NumPy", "Time-Series Analysis"]
    }
  ],
  projects: [
    {
      id: "aptransco-forecasting",
      title: "Day-Ahead Demand Forecasting — APTransco (State Load Despatch Centre)",
      link: null,
      domain: "ML · Production Systems",
      context: "AI Engineer Intern · APTransco",
      bullets: [
        "Compared five architecturally different day-ahead forecasting approaches — gradient-boosted ensembles, a Temporal Fusion Transformer, an OpenSTEF multi-horizon workflow — under one identical walk-forward evaluation, and shipped the hybrid gradient-boosted ensemble that won: 3.27% MAPE overall, best of all four on the hardest out-of-sample day.",
        "Engineered 217 leakage-audited features from weather, calendar, and irrigation signals, then hardened the winning model into a live production service against SLDC's PostgreSQL database — validated serving path, stress-tested feed outages, shipped monitoring and a runbook."
      ],
      techStack: ["Python", "Linux", "LightGBM", "CatBoost", "XGBoost", "PyTorch (TFT)", "PostgreSQL", "Pandas", "NumPy", "Time-Series Analysis"],
      caseStudy: {
        problem: "SLDC needs a forecast of state demand at 15-minute resolution — 96 blocks — for the entire next day, issued every evening before any of that day has happened, to schedule power procurement. Under the Deviation Settlement Mechanism, the utility bears the financial cost of any mismatch between scheduled and actual demand, and AP's demand is unusually weather- and calendar-sensitive: cyclones cause sharp short-lived collapses, and a dense holiday/second-Saturday/agricultural calendar produces dips a naive model reads as noise.",
        built: "Rather than commit to one model upfront, built and compared five architecturally different approaches under one identical walk-forward evaluation: a dense-lag gradient-boosted ensemble (LightGBM + CatBoost), a Temporal Fusion Transformer, an OpenSTEF multi-horizon workflow, a leakage-safe exogenous-only ensemble, and a hybrid of the last two. The hybrid — blending 209 weather/calendar features with 8 deliberately coarse demand-lag features through a regime gate, residual corrector, and conformal calibration — won, and was hardened into the model now issuing genuine live day-ahead forecasts from SLDC's PostgreSQL database.",
        decision: "The hybrid ensemble wasn't the best on average — a lag-heavy flat ensemble was fractionally more accurate overall (3.01% vs. 3.27% MAPE). It was chosen because the ranking inverts on the day it matters most: on Cyclone Montha's landfall day, the hybrid held 12.8% MAPE against the flat ensemble's 15.9%, because four independent safeguards kept its two lag-aware members from being trusted on the one kind of day where yesterday's demand stops being a useful guide to today's.",
        simGap: "There's no simulator standing in for the grid — the equivalent constraint is that a forecast which scores well offline is worthless until it's translated into a scheduling number a non-technical operator can act on. That constraint got concrete once the model went live: the real SLDC database schema didn't match its documented spec and had to be confirmed by direct sampling before serving code could be written against it, and a single corrupted 15-minute SCADA reading — just under the existing bad-data threshold — silently pulled a live forecast down by roughly 900 MW before a shape-based outlier check closed that gap.",
        landed: "The first genuine live day-ahead forecast, sourced directly from the operational database, issued 13 July 2026. Validated with a 38-day shadow run that matched the production serving path to the backtest within 0.05 points of MAPE, and stress-tested against demand-feed outages (0–3 day freezes, 152 forecast calls, zero crashes) — shipped with monitoring, a retrain policy, and an operator runbook."
      }
    },
    {
      id: "asteroid-risk",
      title: "Asteroid Risk Classification",
      link: { text: "Notebook", url: "https://github.com/harshita-sl/Aestroid-risk-classification" },
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
