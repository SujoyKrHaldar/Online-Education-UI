import { IoIosMusicalNotes } from "react-icons/io";
import { FaProjectDiagram, FaCodeBranch } from "react-icons/fa";
import { BsChatDotsFill, BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineComputer, MdAnimation, MdWork } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { GiMechanicalArm, GiPencilRuler } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { SiPhotobucket } from "react-icons/si";

export const category = [
  {
    name: "Development",
    icons: <FaCodeBranch />,
  },

  {
    name: "Design",
    icons: <SiMaterialdesignicons />,
  },
  {
    name: "Music",
    icons: <IoIosMusicalNotes />,
  },

  {
    name: "Computer science",
    icons: <MdOutlineComputer />,
  },

  {
    name: "Animation",
    icons: <MdAnimation />,
  },

  {
    name: "Mechine learning",
    icons: <GiMechanicalArm />,
  },

  {
    name: "Art and drawing",
    icons: <GiPencilRuler />,
  },
  {
    name: "Photography",
    icons: <SiPhotobucket />,
  },
];

export const faq = [
  {
    q: "Is this site a coding bootcamp?",
    a: "In short, no we’re not. We aim to offer the same value, but at 100X lower price, so there are differences. Scrimba allows you to study where you want, when you want. We also substitute the classroom teaching experience with interactive screencast, live events, and peer-to-peer help between students.",
  },
  {
    q: "Do I get in-person help from teachers?",
    a: "Getting help at Scrimba is done peer-to-peer, meaning students help and support each other, instead of teacher-to-student. This is an important ingredient in being able to charge 1% of what coding bootcamps charge.",
  },
  {
    q: "When do the courses start?",
    a: "Whenever you want. Our courses are all self-paced, meaning you follow your own schedule. Sign up and get started today if you’d like!",
  },
  {
    q: "How long does the career path take?",
    a: "You can complete the career path in three months if you are fast. But it will realistically take you 6-12 months to reach a hireable level as a frontend developer.",
  },
  {
    q: "I have more questions. Who can I ask?",
    a: "Please join our Discord server and ask in the #general channel. There, you will be replies from both the community and Team Scrimba.",
  },
];

export const courses = [
  {
    name: "learn python from scratch",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tag: "Intermediate",
    tag_col: "bg-amber-300",
    author: "ABC xyz",
    updatedAt: "2nd march",
    span: "2hr 30mins",
    lessions: "41",
  },

  {
    name: "learn javascript by building real life projects",
    thumbnail:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tag: "Basic",
    tag_col: "bg-green-500",
    author: "ABC xyz",
    updatedAt: "4nd march",
    span: "8hrs",
    lessions: "75",
  },

  {
    name: "Reactjs, zero to hero",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tag: "Intermediate",
    tag_col: "bg-amber-300",
    author: "ABC xyz",
    updatedAt: "15th march",
    span: "13hrs",
    lessions: "106",
  },

  {
    name: "Lets learn Nextjs form zero to hero",
    thumbnail:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tag: "Intermediate",
    tag_col: "bg-amber-300",
    author: "ABC xyz",
    updatedAt: "3rd march",
    span: "26hrs",
    lessions: "200",
  },
];

export const blogs = [
  {
    tag: "Technology",
    name: "How techonology evolves",
    thumbnail:
      "https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    slug: "",
    author: "ABC xyz",
    createdAT: "2nd march 2020",
  },

  {
    tag: "Study",
    name: "How to learn your favourite subject very fast way.",
    thumbnail:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    slug: "",
    author: "ABC xyz",
    createdAT: "2nd april 2020",
  },

  {
    tag: "Study",
    name: "How to get best out of all the courses",
    thumbnail:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    slug: "",
    author: "ABC xyz",
    createdAT: "2nd may 2020",
  },

  {
    tag: "Technology",
    name: "Will web5.0 kill web3.0 ?",
    thumbnail:
      "https://images.unsplash.com/photo-1639803812104-7fe5161508a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    slug: "",
    author: "ABC xyz",
    createdAT: "2nd may 2020",
  },
];

export const howItWorks = [
  {
    main: "Learn faster with interactive screencasts",
  },

  {
    main: "Get help and support from your peers",
  },

  {
    main: "Meet the world’s best coding teachers",
  },
];

export const quality = [
  {
    icons: <FaProjectDiagram />,
    main: "Project based",
    para: "Build real products while learning",
  },

  {
    icons: <MdWork />,
    main: "Job focused",
    para: "Learn industry-relevant skills",
  },

  {
    icons: <BsChatDotsFill />,
    main: "Peer to peer",
    para: "Get help & support from your peers",
  },

  {
    icons: <BsSpeedometer2 />,
    main: "Self paced",
    para: "Learn at your own pace",
  },

  {
    icons: <GrCertificate />,
    main: "Certification",
    para: "Finish the path to get certificate",
  },

  {
    icons: <ImPriceTags />,
    main: "Affordable",
    para: "1% of the price of a bootcamp",
  },
];
