export const researchAreas = [
  {
    id: 1,
    title: "Immersive & Extended Reality for Learning",
    icon: "◈",
    keywords: ["AR", "VR", "MR", "Medical Training", "Physical Skill Learning"],
    description:
      "We design immersive and extended reality systems to support learning and guidance for complex physical and hands-on skills.",
  },
  {
    id: 2,
    title: "Physiological Sensing",
    icon: "◎",
    keywords: ["Brain-Computer Interfaces", "Gaze & Pupillometry", "Cognitive Load", "Multimodal Sensing"],
    description:
      "We investigate physiological and behavioral signals to understand learners' cognitive and affective states and drive closed-loop, BCI-enabled adaptive XR systems.",
  },
  {
    id: 3,
    title: "Adaptive & Personalized Learning",
    icon: "↗",
    keywords: ["Learner Modeling", "Adaptive Systems", "Intelligent Feedback"],
    description:
      "We develop learner-centered technologies that adapt feedback, guidance, and learning experiences to individual needs.",
  },
  {
    id: 4,
    title: "Human-AI & Reflective Learning",
    icon: "✦",
    keywords: ["Generative AI", "Human-AI Collaboration", "AI Agents", "Reflection", "Self-directed Learning"],
    description:
      "We explore how generative AI, physiologically informed co-pilots, and AI agents can collaborate with learners to support reflection, self-directed learning, and deeper understanding.",
  },
];

export const projects = [
  {
    id: "sweyepinch",
    title: "SwEYEpinch: Gaze-and-Pinch Text Entry for XR",
    description:
      "A text entry technique for extended reality that combines eye tracking with subtle pinch gestures, decoding words mid-swipe in real time and approaching keyboard-level typing speeds in user studies.",
    area: 2,
    areaLabel: "Sensing",
    researchers: ["Ziheng Li", "Xichen He", "et al."],
    venue: "CHI 2026",
    image: "local:project-img/project-sweyepinch.jpg",
    imageAlt: "SwEYEpinch teaser: gaze swiping across a virtual keyboard while pinching to type",
    featured: true,
    link: "https://doi.org/10.1145/3772318.3791820",
  },
  {
    id: "bimanual-xr-assembly",
    title: "Bimanual XR Assembly Specification for Teleoperation",
    description:
      "A bimanual extended reality interface for specifying relative and absolute assembly hierarchies, keeping humans in the loop for intuitive robot teleoperation in assembly tasks.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Benjamin Yang", "Xichen He", "et al."],
    venue: "IEEE VR 2026",
    image: "local:project-img/project-bimanual-xr.jpg",
    imageAlt: "Bimanual XR teaser: assembling gear train components with two controllers in VR",
    featured: true,
    link: "https://doi.org/10.1109/VRW70859.2026.00191",
  },
  {
    id: "vr-task-guidance",
    title: "VR Task Guidance via Relative 6DoF Pose Specification",
    description:
      "A virtual reality guidance approach that communicates precise object placement through relative six-degree-of-freedom pose specification, supporting instruction for complex physical tasks.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Benjamin Yang", "Xichen He", "et al."],
    venue: "ISMAR 2025",
    image: "local:project-img/project-vr-task-guidance.jpg",
    imageAlt: "VR task guidance scenes: instruction cards and ghost placement targets for assembly",
    featured: true,
    link: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00247",
  },
  {
    id: "permanent-proxies",
    title: "Permanent Proxies for Bimanual VR Manipulation",
    description:
      "A virtual reality interaction technique that provides persistent object proxies to support efficient bimanual selection and manipulation.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Benjamin Yang", "Jen-Shuo Liu", "Xichen He", "et al."],
    venue: "IEEE VR 2025",
    image: "local:project-img/project-permanent-proxies.jpg",
    imageAlt: "Permanent proxies teaser: manipulating distant motherboard components via proxies in VR",
    featured: false,
    link: "https://doi.org/10.1109/VRW66409.2025.00311",
  },
  {
    id: "xr-gui-ecs",
    title: "An XR GUI for ECS Message Visualization",
    description:
      "An extended reality interface for visualizing and debugging message flows in entity-component-system architectures, built on the open-source Mercury Messaging framework and demoed at ISMAR 2024.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Benjamin Yang", "Xichen He", "et al."],
    venue: "ISMAR 2024",
    image: "local:project-img/project-xr-gui-ecs.jpg",
    imageAlt: "Mercury Messaging XR applications collage",
    featured: false,
    link: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00189",
  },
];

export const people = {
  pi: {
    name: "Dishita Turakhia, Ph.D.",
    position: "Principal Investigator",
    title: "Assistant Professor of Computer Science",
    interests: "Human-Computer Interaction · Learning Sciences · XR · Generative AI",
    bio: "Dishita Turakhia leads the ImmersED HCI Group at Emory University. Her research designs human-centered systems for learning physical and hands-on skills—including motor, maker, manufacturing, and medical skills—using physiological sensing, extended reality, and generative AI.",
    photo: "local:dishita-turakhia-v2.jpg",
    email: "dishita.turakhia@emory.edu",
    website: "https://dishitaturakhia.com/",
  },
  phd: [
    {
      name: "Zezheng (Oliver) Sun",
      position: "Ph.D. Student in Computer Science",
      year: "Ph.D. Student",
      interests:
        "Human-Computer Interaction · Extended Reality · Artificial Intelligence · Healthcare",
      bio: "Zezheng (Oliver) Sun is a Ph.D. student in Computer Science at Emory University, advised by Dr. Dishita Turakhia. His research focuses on designing human-centered interactive systems that leverage extended reality (XR) and artificial intelligence to support learning, communication, and collaboration. His work explores how emerging technologies can create more intuitive, engaging, and effective interactive experiences across healthcare, education, and immersive environments.",
      photo: "local:oliver-sun-v2.png",
      email: "zezheng.sun@emory.edu",
      website: "https://oliversun0106.github.io/Zezheng-Oliver-Sun-personal-website/",
    },
    {
      name: "Xichen He",
      position: "Ph.D. Student in Computer Science & Biomedical Informatics",
      year: "Ph.D. Student",
      interests:
        "Human-Computer Interaction · Extended Reality · Brain–Computer Interfaces · Physiological Sensing · AI Agents",
      bio: "Xichen He is a Ph.D. student in Computer Science and Biomedical Informatics at Emory University, advised by Dr. Dishita Turakhia. His research focuses on extended reality (XR) systems that integrate physiological sensing devices and brain–computer interfaces (BCI) to create adaptive, human-centered interactive experiences, as well as vision-language-action (VLA) agents that connect human cognitive states with embodied AI assistance in XR environments. Before joining Emory, he received his M.S. in Computer Science from Columbia University and his B.S. in Computer Science with honors from UC Santa Barbara.",
      photo: "local:xichen-he.jpg",
      email: "xichen.he@emory.edu",
      website: "https://xichenhe.com/",
    },
  ],
};

export const publications = [
  {
    year: 2026,
    papers: [
      {
        title:
          "SwEYEpinch and Beyond: Exploring Intuitive, Efficient Text Entry for Extended Reality via Eye and Hand Tracking",
        authors: [
          "Ziheng Li*",
          "Xichen He*",
          "Mengyuan Wu",
          "Zeyi Tong",
          "Haowen Wei",
          "Benjamin Yang",
          "Steven Feiner",
          "Paul Sajda",
        ],
        venue: "CHI 2026",
        venueFull: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems",
        links: { paper: "https://doi.org/10.1145/3772318.3791820" },
      },
      {
        title: "Bimanual XR Specification of Relative and Absolute Assembly Hierarchies for Teleoperation",
        authors: [
          "Benjamin Yang",
          "Xichen He",
          "Charlie Zou",
          "Jen-Shuo Liu",
          "Barbara Tversky",
          "Steven Feiner",
        ],
        venue: "IEEE VR 2026",
        venueFull: "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
        links: { paper: "https://doi.org/10.1109/VRW70859.2026.00191" },
      },
    ],
  },
  {
    year: 2025,
    papers: [
      {
        title: "Virtual Reality Task Guidance Through Relative 6DoF Pose Specification",
        authors: [
          "Benjamin Yang",
          "Xichen He",
          "Charlie Zou",
          "Jen-Shuo Liu",
          "Barbara Tversky",
          "Steven Feiner",
        ],
        venue: "ISMAR 2025",
        venueFull: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
        links: { paper: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00247" },
      },
      {
        title: "Permanent Proxies for Bimanual Selection and Manipulation in VR",
        authors: ["Benjamin Yang", "Jen-Shuo Liu", "Xichen He", "Barbara Tversky", "Steven Feiner"],
        venue: "IEEE VR 2025",
        venueFull: "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
        links: { paper: "https://doi.org/10.1109/VRW66409.2025.00311" },
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        title: "An XR GUI for Visualizing Messages in ECS Architectures",
        authors: ["Benjamin Yang", "Xichen He", "Jace Li", "Carmine Elvezio", "Steven Feiner"],
        venue: "ISMAR 2024",
        venueFull: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
        links: { paper: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00189" },
      },
    ],
  },
];
