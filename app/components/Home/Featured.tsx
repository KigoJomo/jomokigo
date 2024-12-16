import Link from "next/link";
import React, { FC } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Ambient graphics",
    description:
      "Exploring the intersection of art and technology through immersive graphic designs.",
    imageUrl: "/images/projects/ambient.png",
  },
  {
    id: 2,
    title: "Casa Del Lusso",
    description:
      "Embracing contemporary fashion with sleek, innovative designs that reflect the essence of today's trends.",
    imageUrl: "/images/projects/casa.png",
  },
  {
    id: 3,
    title: "Consol Cargo",
    description:
      "Providing reliable and efficient shipping solutions for businesses worldwide.",
    imageUrl: "/images/projects/consol.png",
  },
];


const Featured: FC = () => {
  return (
    <section className="bg-background flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
        <h2>latest work ...</h2>

        <Link href="/projects" className="ml-auto uppercase border-b-2 border-transparent md:hover:border-white">view all</Link>
      </div>

      <div className="w-full flex flex-col">
        {projects.map((project, index) =>(
          <ProjectCard 
            key={project.id} 
            index={index + 1}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;