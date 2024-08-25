const projects = [
  {
    id: 1,
    title: "The wild oasis",
    description:
      "This is an application, where user can log in and manage hotel rooms and the reservations. This is Fullstack application and backend built with Supabase.",
    image: "../../src/assets/wild-2.png",
    link: "https://the-wild-oasis-2-nwchz0yjq-archils-projects-9c1cb6e3.vercel.app",
    githubLink: "https://github.com/Archil-Milorava/The-wild-Oasis-2",
    fullStack: true,
    technologies: [
      "react",
      "supabase",
      "styled components",
      "react router",
      "react query",
    ],
  },
  {
    id: 2,
    title: "Pizza ordering app",
    description:
      "In this application, user can order pizza. here is Redux used for state management. If you can not order Pizza, it means that API is not working. ",
    image: "../../src/assets/pizza-1.png",
    link: "https://pizza-ordering-chi.vercel.app/",
    githubLink: "https://github.com/Archil-Milorava/Pizza-Ordering",
    fullStack: false,
    technologies: [
      "react",
      "typescript",
      "redux",
      "tailwind css",
      "react router",
    ],
  },
  {
    id: 3,
    title: "The Wild Oasis 2",
    description:
      "In this application user can log in with Google account and make reservations. This application is fullstack and backend built with Supabase, Frontend with next JS.",
    image: "../../src/assets/wild-1.png",
    link: "https://the-wild-oasis-opal-three.vercel.app/",
    githubLink: "https://github.com/Archil-Milorava/The-wild-oasis-vol2",
    fullStack: false,
    technologies: ["Next JS", "supabase", "Tailwind", "google auth"],
  },
  {
    id: 4,
    title: "Todo List app",
    description:
      "This is normal todo list apps. Your todos are saved in local storage. State is managed with Context API",
    image: "../../src/assets/todo-1.png",
    link: "https://my-todo-list-seven-ecru.vercel.app/",
    githubLink: "https://github.com/Archil-Milorava/TodoListApp",
    fullStack: false,
    technologies: ["react", "typescript", "tailwind css", "Context API"],
  },
];

export default projects;
