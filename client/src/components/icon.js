// src/components/icons.js
import {
    SiReact,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiJenkins,
    SiTerraform,
    SiGoogle,             // ← import Google/search icon
  
    // EMS
    SiTailwindcss,
    SiJsonwebtokens,
    SiChartdotjs,
  
    // Tap It
    SiTypescript,
    SiFirebase,
    SiExpo,
    SiReact as SiReactNative,
    SiTailwindcss as SiRNTailwind,
  } from "react-icons/si";
  
  export const TECH_ICON_MAP = {
    // Turf Management (MERN)
    React: SiReact,
    Redux: SiRedux,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    Jenkins: SiJenkins,
    Terraform: SiTerraform,
    SEO: SiGoogle,         // ← now points at SiGoogle
  
    // EMS
    "Tailwind CSS": SiTailwindcss,
    "JSON Web Tokens": SiJsonwebtokens,
    "Chart.js": SiChartdotjs,
  
    // Tap It
    TypeScript: SiTypescript,
    "Firebase Auth": SiFirebase,
    Expo: SiExpo,
    "React Native": SiReactNative,
    "Tailwind CSS (RNTailwind)": SiRNTailwind,
  };
  