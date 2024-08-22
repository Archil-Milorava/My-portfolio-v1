const projects = [
  {
    id: 1,
    title: "The wild oasis",
    description:
      "This is an application, where user can log in and manage hotel rooms and the reservations. This is Fullstack application and backend built with Supabase.",
    image: "../../public/wild-2.png",
    link: "https://the-wild-oasis-2-plum.vercel.app/login",
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
    image: "../../public/pizza-1.png",
    link: "https://pizza-ordering-chi.vercel.app/menu",
    githubLink: "https://github.com/Archil-Milorava/Pizza-Ordering",
    fullStack: false,
    technologies: ["react", "redux", "tailwind css", "react router"],
  },
];

export default projects;
