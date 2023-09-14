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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    promptopia,
    carhub_modal,
    pizza,
    react_chess,
    marvel,
    portrait
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
  
  const experiences = [
    {
      title: "Personal Assistant",
      company_name: "STABILBAU",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2021 - August 2022",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
        "marketing",
        "employment",
        "recruiting",
        "people management",
        "project management"
      ],
    },
    {
      title: "Frontend developer",
      company_name: "freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2021 - December  2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "CC Games",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2022 - Jul 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nextjs13",
          color: "blue-text-gradient",
        },
        {
          name: "hedlessUI",
          color: "green-text-gradient",
        },
      ],
      image: carhub_modal,
      source_code_link: "https://github.com/AndrewTihonyuk878/carhub",
      website_link: "https://rental-cars-rose.vercel.app"
    },
    {
      name: "Promptopia",
      description:
        "Promptopia is an Full Stack App and open-source AI prompting tool for modern world to discover, create and share creative prompts",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nextjs13",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/AndrewTihonyuk878/promptopia",
      website_link: "https://promptopia-iota-eosin.vercel.app/"
    },
    {
      name: "React Pizza",
      description:
        "This is a full-fledged web application, in the form of an online store, for choosing pizza. Where we can filter our products, add to cart, delete them, select the size, type, etc.. Developed using: TypeScript, Redux, React, React-router-dom, Redux-Toolkit, AXIOS, mockApi, and other technologies",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typeScript",
          color: "green-text-gradient",
        },
        {
          name: "reduxRouterDom",
          color: "pink-text-gradient",
        },
        {
          name: "reduxToolkit",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "mockApi",
          color: "pink-text-gradient",
        },
      ],
      image: pizza,
      source_code_link: "https://github.com/AndrewTihonyuk878/react-pizza",
      website_link: "https://react-pizza-brown.vercel.app/"
    },
    {
      name: "React-Chess",
      description:
        "Object oriented programming using ReactJS and TypeScript",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typeScript",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "blue-text-gradient",
        },
      ],
      image: react_chess,
      source_code_link: "https://github.com/AndrewTihonyuk878/react-chess",
      website_link: "https://react-chess-ecru.vercel.app"
    },
    {
      name: "Marvel-service",
      description:
        "Marvel Service is an application where you can view Marvel characters and the comics with their participation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "reactRouter",
          color: "pink-text-gradient",
        },
        {
          name: "marvelComicsApi",
          color: "blue-text-gradient",
        },
      ],
      image: marvel,
      source_code_link: "https://github.com/AndrewTihonyuk878/marvel_starter_react_hooks",
      website_link: "https://marvel-starter-react-hooks.vercel.app"
    },
    {
      name: "Marvel-service",
      description:
        "Portrait on canvas - it was an interesting project on vanilla JavaScript, in which I got good practical experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: portrait,
      source_code_link: "https://github.com/AndrewTihonyuk878/picture",
      website_link: "https://andrewtihonyuk878.github.io/picture/"
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    //   website_link: "https://rental-cars-rose.vercel.app"
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };