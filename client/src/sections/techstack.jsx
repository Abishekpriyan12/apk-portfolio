import React from "react";
import { motion } from "framer-motion";

// 1) PNG imports
import aiIcon       from "../assets/icons/ai.png";
import angularIcon  from "../assets/icons/angular.png";
import cssIcon      from "../assets/icons/css.png";
import figmaIcon    from "../assets/icons/figma.png";
import graphqlIcon  from "../assets/icons/GraphQL.png";
import htmlIcon     from "../assets/icons/html.png";
import jsIcon       from "../assets/icons/JS.png";
import mongoIcon    from "../assets/icons/MongoDB.png";
import nodeIcon     from "../assets/icons/nodejs.png";
import psIcon       from "../assets/icons/ps.png";
import reactIcon    from "../assets/icons/react.png";
import gitIcon      from "../assets/icons/git.png";
import dockerIcon   from "../assets/icons/docker.png";
import awsIcon      from "../assets/icons/aws.png";
import expressIcon  from "../assets/icons/Express.png";
import mysqlIcon    from "../assets/icons/mysql.png";
import tailwindIcon from "../assets/icons/Tailwind.png";

// 2) Icon map
const iconsMap = {
  ai: aiIcon, angular: angularIcon, css: cssIcon, figma: figmaIcon,
  graphql: graphqlIcon, html: htmlIcon, js: jsIcon, mongodb: mongoIcon,
  nodejs: nodeIcon, ps: psIcon, react: reactIcon, git: gitIcon,
  docker: dockerIcon, aws: awsIcon, expressjs: expressIcon,
  mysql: mysqlIcon, tailwind: tailwindIcon
};

// 3) Categories
const categories = [
  { name: "FRONTEND", items: [
      { id: "js", label: "JavaScript" },
      { id: "react", label: "React" },
      { id: "angular", label: "Angular" },
      { id: "html", label: "HTML" },
      { id: "tailwind", label: "Tailwind CSS" }
    ]
  },
  { name: "BACKEND", items: [
      { id: "expressjs", label: "Express.js" },
      { id: "nodejs", label: "Node.js" }
    ]
  },
  { name: "DATABASE", items: [
      { id: "mongodb", label: "MongoDB" },
      { id: "mysql", label: "MySQL" }
    ]
  },
  { name: "TOOLS", items: [
      { id: "ps", label: "Photoshop" },
      { id: "ai", label: "Illustrator" },
      { id: "git", label: "Git" },
      { id: "docker", label: "Docker" },
      { id: "aws", label: "AWS" }
    ]
  }
];

// 4) Framer Motion variants
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const categoryVariants  = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function TechStack() {
  return (
    <section id="tech-stack" className=" text-white py-16 px-4 md:px-10" style={{ fontFamily: "var(--font-shuttle)" }}>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-[20px] font-[minecraft] font-extrabold mb-12 text-[#FE4F2D]"
      >
        MY TECH STACK
      </motion.h2>

      <div className="max-w-5xl mx-auto mt-16">
        <motion.div
          className="flex flex-col gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={categoryVariants}
              className="flex flex-col md:flex-row md:items-start md:gap-8 justify-center"
            >
              {/* Category Label */}
              <div className="w-32 flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-400 uppercase">
                  {cat.name}
                </h3>
              </div>

              {/* Badges with pop animation */}
              <div className="flex flex-wrap gap-6 flex-1 justify-center">
                {cat.items.map((tech, idx) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, x: -30, y: 30, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: idx * 0.1 }}
                    className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl cursor-pointer"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <motion.img
                      src={iconsMap[tech.id]}
                      alt={tech.label}
                      className="w-7 h-7 object-contain"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    />
                    <span className="text-sm font-medium text-white">
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
