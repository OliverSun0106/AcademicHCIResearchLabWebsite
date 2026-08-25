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
    title: "Physiological & Cognitive Sensing",
    icon: "◎",
    keywords: ["EEG", "Gaze", "Cognitive Load", "Multimodal Sensing"],
    description:
      "We investigate physiological and behavioral signals to understand learners' cognitive and affective states.",
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
    keywords: ["Generative AI", "Human-AI Interaction", "Reflection", "Self-directed Learning"],
    description:
      "We explore how AI-powered and interactive systems can support reflection, self-directed learning, and deeper understanding.",
  },
];

export const projects = [
  {
    id: "placeholder-1",
    title: "Project Placeholder 1",
    description: "A placeholder research project description for this lab website.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Researcher A", "Researcher B"],
    venue: "Upcoming",
    image: "photo-1576091160550-2173dba999ef",
    imageAlt: "Placeholder project image",
    featured: true,
  },
  {
    id: "placeholder-2",
    title: "Project Placeholder 2",
    description: "A placeholder research project description for this lab website.",
    area: 2,
    areaLabel: "Sensing",
    researchers: ["Researcher C", "Researcher D"],
    venue: "Upcoming",
    image: "photo-1559757148-5c350d0d3c56",
    imageAlt: "Placeholder project image",
    featured: true,
  },
  {
    id: "placeholder-3",
    title: "Project Placeholder 3",
    description: "A placeholder research project description for this lab website.",
    area: 3,
    areaLabel: "Adaptive Learning",
    researchers: ["Researcher E", "Researcher F"],
    venue: "Upcoming",
    image: "photo-1576091160399-112ba8d25d1d",
    imageAlt: "Placeholder project image",
    featured: true,
  },
  {
    id: "placeholder-4",
    title: "Project Placeholder 4",
    description: "A placeholder research project description for this lab website.",
    area: 1,
    areaLabel: "Immersive Learning",
    researchers: ["Researcher G", "Researcher H"],
    venue: "Upcoming",
    image: "photo-1587614382346-4ec70e388b28",
    imageAlt: "Placeholder project image",
    featured: false,
  },
  {
    id: "placeholder-5",
    title: "Project Placeholder 5",
    description: "A placeholder research project description for this lab website.",
    area: 4,
    areaLabel: "Human-AI Learning",
    researchers: ["Researcher I", "Researcher J"],
    venue: "Upcoming",
    image: "photo-1611162617213-7d7a39e9b1d7",
    imageAlt: "Placeholder project image",
    featured: false,
  },
  {
    id: "placeholder-6",
    title: "Project Placeholder 6",
    description: "A placeholder research project description for this lab website.",
    area: 2,
    areaLabel: "Sensing",
    researchers: ["Researcher K", "Researcher L"],
    venue: "Upcoming",
    image: "photo-1559757175-5700dde675bc",
    imageAlt: "Placeholder project image",
    featured: false,
  },
];

export const people = {
  pi: {
    name: "PI Name",
    position: "Principal Investigator",
    title: "Placeholder Title",
    interests: "Placeholder interest area",
    bio: "Placeholder biography for this lab member.",
    photo: "photo-1573496359142-b8d87734a5a2",
    awards: ["Placeholder Award 1", "Placeholder Award 2"],
    email: "pi@placeholder.edu",
  },
  phd: [
    {
      name: "PhD Student 1",
      position: "PhD Student",
      year: "Year 1",
      interests: "Placeholder research area",
      photo: "photo-1500648767791-00dcc994a43e",
    },
    {
      name: "PhD Student 2",
      position: "PhD Student",
      year: "Year 2",
      interests: "Placeholder research area",
      photo: "photo-1573496359142-b8d87734a5a2",
    },
    {
      name: "PhD Student 3",
      position: "PhD Student",
      year: "Year 3",
      interests: "Placeholder research area",
      photo: "photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "PhD Student 4",
      position: "PhD Student",
      year: "Year 4",
      interests: "Placeholder research area",
      photo: "photo-1531123897727-8f129e1688ce",
    },
  ],
  masters: [
    {
      name: "MS Student 1",
      position: "MS Student",
      year: "Year 1",
      interests: "Placeholder research area",
      photo: "photo-1519085360753-af0119f7cbe7",
    },
    {
      name: "MS Student 2",
      position: "MS Student",
      year: "Year 2",
      interests: "Placeholder research area",
      photo: "photo-1529626455594-4ff0802cfb7e",
    },
  ],
  undergrad: [
    {
      name: "Undergrad 1",
      position: "Undergraduate Researcher",
      interests: "Placeholder research area",
      photo: "photo-1506794778202-cad84cf45f1d",
    },
    {
      name: "Undergrad 2",
      position: "Undergraduate Researcher",
      interests: "Placeholder research area",
      photo: "photo-1494790108377-be9c29b29330",
    },
  ],
  alumni: [
    {
      name: "Alumni 1",
      position: "Former Member",
      now: "Placeholder affiliation",
      photo: "photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Alumni 2",
      position: "Former Member",
      now: "Placeholder affiliation",
      photo: "photo-1534528741775-53994a69daeb",
    },
    {
      name: "Alumni 3",
      position: "Former Member",
      now: "Placeholder affiliation",
      photo: "photo-1492562080023-ab3db95bfbce",
    },
  ],
};

export const publications = [
  {
    year: 2024,
    papers: [
      {
        title: "Placeholder Publication 1",
        authors: ["Author A", "Author B", "Author C"],
        venue: "Venue 2024",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", project: "#", video: "#" },
        award: "Placeholder Award",
      },
      {
        title: "Placeholder Publication 2",
        authors: ["Author D", "Author E", "Author F"],
        venue: "Venue 2024",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", project: "#" },
      },
      {
        title: "Placeholder Publication 3",
        authors: ["Author G", "Author H"],
        venue: "Venue 2024",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", code: "#" },
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title: "Placeholder Publication 4",
        authors: ["Author I", "Author J", "Author K"],
        venue: "Venue 2023",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", video: "#", code: "#" },
        award: "Placeholder Award",
      },
      {
        title: "Placeholder Publication 5",
        authors: ["Author L", "Author M", "Author N"],
        venue: "Venue 2023",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", project: "#" },
      },
      {
        title: "Placeholder Publication 6",
        authors: ["Author O", "Author P", "Author Q"],
        venue: "Venue 2023",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", project: "#", video: "#" },
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title: "Placeholder Publication 7",
        authors: ["Author R", "Author S"],
        venue: "Venue 2022",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#" },
      },
      {
        title: "Placeholder Publication 8",
        authors: ["Author T", "Author U", "Author V"],
        venue: "Venue 2022",
        venueFull: "Placeholder conference or journal venue",
        links: { paper: "#", project: "#" },
      },
    ],
  },
];
