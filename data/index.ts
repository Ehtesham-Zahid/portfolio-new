export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building some amazing Websites",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ironwear - Ecommerce Store",
    des: "Experience unmatched durability and style with Ironwear’s rugged, premium apparel designed to elevate your everyday look.",
    img: "/p21.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/cloudinary.svg",
      "/mdb.svg",
    ],
    showLink: "ironwear.com",
    link: "https://e-commerce-2-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Callup - Calling Solution Powered By AI",
    des: "Unlock seamless communication with CALLUP's AI-powered calling solution, designed to streamline your conversations and boost productivity.",
    img: "/p20.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/njs.svg", "/mdb.svg"],
    showLink: "callup.ai",
    link: "https://www.callup.ai",
  },
  {
    id: 3,
    title: "AI powered sales system - Landing Page",
    des: "Revolutionize your sales process with Unorthodox's AI-powered system. Boost efficiency, drive conversions, and close deals faster with cutting-edge technology.",
    img: "/p1222.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/vite.svg"],
    showLink: "unorthodox.ai",
    link: "https://sales-system-landing-page.vercel.app/",
  },
  {
    id: 4,
    title: "Security Company - Landing Page",
    des: "Protect what matters most with our advanced security solutions. Ensure safety and peace of mind with our cutting-edge technology and expert protection services..",
    img: "/p22.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/vite.svg"],
    showLink: "security.com",
    link: "https://security-company-website-frontend-2.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Ehtesham is an exceptional talent with a wide range of unique skills. There is no challenge he cannot tackle, and he consistently completes his work ahead of deadlines. Ehtesham is not only efficient but also highly adaptable, always open to new ideas and eager to embrace innovative approaches. His creativity, dedication, and problem-solving abilities make him an invaluable asset to any team.",
    name: "Gorang Madaan",
    title: "C.E.O",
  },
  {
    quote:
      "Ehtesham is a proactive and dedicated professional who brings creativity and innovation to every project. His ability to understand client needs and translate them into effective solutions is truly impressive. Ehtesham is detail-oriented, communicates effectively, and consistently exceeds expectations with his high-quality work and timely delivery. He’s a pleasure to work with and a true asset to any team.",
    name: "Malik Haseeb",
    title: "C.E.O of AIOBC Technologies",
  },
  {
    quote:
      "Working with Ehtesham has been a game-changer for our projects. He has a knack for turning complex problems into simple, effective solutions with his exceptional technical skills and innovative thinking. Ehtesham is highly organized, collaborative, and always ready to go the extra mile to ensure success. His commitment to excellence and ability to deliver results on time make him an outstanding professional.",
    name: "Sophia Williams",
    title: "Project Manager at InnovateX Solutions",
  },
  {
    quote:
      "Ehtesham’s work ethic and passion for excellence are unmatched. He is a quick learner who thrives on challenges and is always eager to improve his skills. Ehtesham’s attention to detail and commitment to delivering high-quality results have significantly contributed to the success of our projects. His positive attitude, flexibility, and readiness to tackle new challenges make him a valuable team player and a pleasure to work with.",
    name: "Michael Anderson",
    title: "CTO at FutureTech Ventures",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Full Stack Web Developer",
    desc: "Developed and maintained responsive websites and web applications using JavaScript, React, Node.js, Express, and MongoDB.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ehtesham-Zahid",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ehtesham.codes/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ehtesham-zahid-ab8a71229/",
  },
];
