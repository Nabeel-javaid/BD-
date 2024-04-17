import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  TS,
  Hashlock,
  fyp,
  jyu,
  jobit,
  blockchain,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Auditor",
    icon: web,
  },
  {
    title: "React Auditor",
    icon: mobile,
  },
  {
    title: "Rust Developer",
    icon: backend,
  },
  {
    title: "Smart Contract Auditor",
    icon: creator,  
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Solidity Auditor",
    companyName: "",
    icon: blockchain,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Started working as solidity auditor and participated in online contest happen at code4rena, Sherlock and CodeHawks",
      "Ranked 324th on the leaderboard of Code4rena for the year 2023.",
      "Presently holding the 361th position on the all-time leaderboard of Sherlock",
      "Presently holding Top 150 position on the all-time leaderboard of CodeHawks..",
    ],
  },
  {
    title: "TypeScript Auditor",
    companyName: "",
    icon: TS,
    iconBg: "#383E56",
    date: "March 2024- Present",
    points: [
      "Audited a TypeScript-based project, identifying multiple potential security and performance issues.",
      "Analyzed and improved smart contract code for a decentralized application, enhancing security and efficiency.",
      "Reviewed and optimized integration of blockchain functionality within a NEXT.Js web application, ensuring robust and secure user interactions with decentralized services.",
    ]
  },  
  {
    title: "Private Auditor",
    companyName: "",
    icon: Hashlock,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Specialized in auditing smart contracts for security and efficiency, leveraging deep expertise in blockchain technologies.",
      "Conducted thorough reviews of smart contracts, identifying critical vulnerabilities and potential issues that safeguarded protocols and user funds.",
      "Collaborated with team to enhance security practices and integrate robust smart contract solutions in web applications.",
      "Provided detailed feedback and recommendations to improve smart contract reliability and performance, ensuring compatibility and responsiveness across platforms."
    ]
  }
,  
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Nabeel is recognized for his expertise in blockchain, where he brings valuable insights and a proven track record to the table. His commitment to project excellence make him a highly recommended choice in these advanced technologies.",
    name: "Ehsan Rasul",
    designation: "Business Developer",
    company: "Terabit",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "I haven't met an Auditor like Nabeel, whose care for clients' projects and technical expertise stand out. His genuine commitment to project success and ability to meet client needs with high-quality results distinguish him in web development.",
    name: "Ali hamza",
    designation: "",
    company: "Terabit",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Nabeel on our project has been invaluable. His knowledge and skills enhance our work, fostering excellence. His commitment to UI perfection elevates our project's quality, making his contribution essential.",
    name: "Muhammad Ahmed",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Nabeel's exceptional dedication, inspiring leadership, and unwavering commitment to excellence have left an indelible mark on our team, consistently driving outstanding results.      ",
    name: "Abdullah Malik",
    designation: "FreeLancer",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "LendNest",
    description:
      "A comprehensive blockchain based Web Application that allows users to lend and borrow money in a decentralized manner in safe and secure way",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jyu,
    sourceCodeLink: "https://github.com/Nabeel-javaid/fyp3.2",
  },
  {
    name: "Digitalx",
    description:
      "DigitalX is an ASX-listed company that manages digital asset investment funds and offers a blockchain-based regulatory technology platform.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    sourceCodeLink: "https://www.digitalx.com/",
  },
  {
    name: "Arm Swap",
    description:
      "ArmSwap is a platform enhancing blockchain interoperability with a non-custodial protocol for secure cross-chain transactions using decentralized node networks",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: fyp,
    sourceCodeLink: "https://www.armswap.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
