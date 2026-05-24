import project01 from "./../img/projects/dental-sm.webp";
import project01Big from "./../img/projects/dental-lg.webp";

import project02 from "./../img/projects/habit-sm.webp";
import project02Big from "./../img/projects/habit-lg.webp";

import project03 from "./../img/projects/movies-sm.webp";
import project03Big from "./../img/projects/movies-lg.webp";

import project04 from "./../img/projects/phone-sm.webp";
import project04Big from "./../img/projects/phone-lg.webp";

import project05 from "./../img/projects/ws-sm.webp";
import project05Big from "./../img/projects/ws-lg.webp";

import project06 from "./../img/projects/ice-sm.webp";
import project06Big from "./../img/projects/ice-lg.webp";

const projects = [
  {
    title: "Dental Clinic",
    img: project01,
    imgBig: project01Big,
    skills:
      "Next.js 16 (App Router), TypeScript, SCSS Modules, Vercel Blob (blog posts and images), Resend API, Vercel",
    gitHubLink: "",
    websiteLink: "https://dental-clinic-hazel-eight.vercel.app/",
    format: "individual (private project)",
  },
  {
    title: "Habit Tracker",
    img: project02,
    imgBig: project02Big,
    skills:
      "React 19, TypeScript, React Router 7, SCSS, Supabase, Recharts, Vite, classnames, sonner",
    gitHubLink: "https://github.com/Himadieiev/habit-tracker",
    websiteLink: "https://habit-tracker-xi-ashen.vercel.app/",
    format: "individual",
  },
  {
    title: "Movies",
    img: project03,
    imgBig: project03Big,
    skills:
      "React 19, React Router 7, TanStack React Query, Tailwind CSS 4, Appwrite (search analytics), TMDB (The Movie Database), Vite, react-use, Appwrite SDK",
    gitHubLink: "https://github.com/Himadieiev/movies",
    websiteLink: "https://movies-livid-eight.vercel.app/",
    format: "individual",
  },
  {
    title: "Phonebook",
    img: project04,
    imgBig: project04Big,
    skills:
      "React 18, Redux Toolkit, React Router 6, Material UI (MUI) v5, Axios, redux-persist, React Toastify, Node.js, Express, MongoDB, Mongoose",
    gitHubLink: "https://github.com/Himadieiev/phonebook-app",
    websiteLink: "https://himadieiev.github.io/phonebook-app/",
    format: "individual",
  },
  {
    title: "WebStudio",
    skills: "HTML, SCSS (BEM), JavaScript (vanilla)",
    img: project05,
    imgBig: project05Big,
    gitHubLink: "https://github.com/Himadieiev/webstudio-app",
    websiteLink: "https://himadieiev.github.io/webstudio-app/",
    format: "individual",
  },
  {
    title: "IceCream",
    img: project06,
    imgBig: project06Big,
    skills: "HTML, SCSS (BEM), JavaScript (vanilla), Parcel, Swiper, PostHTML",
    gitHubLink: "https://github.com/Himadieiev/ice-cream-new",
    websiteLink: "https://himadieiev.github.io/ice-cream-new/",
    format: "team",
  },
];

export {projects};
