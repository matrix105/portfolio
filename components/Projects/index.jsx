import React from "react";
import { FaExternalLinkAlt, FaGithub, FaRobot, FaCode, FaGlobe } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "AI-powered solution that revolutionizes workflow automation. Built with cutting-edge machine learning algorithms.",
    tags: ["Python", "OpenAI", "MongoDB"],
    image: null, // placeholder
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Intelligent web application that transforms data into actionable insights for businesses.",
    tags: ["Nuxt.js", "Tailwind", "AI"],
    image: null,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Digital platform empowering communities with smart tools and seamless user experiences.",
    tags: ["React", "Node.js", "ML"],
    image: null,
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Scalable system architecture designed for high-performance AI model deployment.",
    tags: ["Python", "Docker", "AWS"],
    image: null,
    link: "#",
    github: "#",
    featured: false,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className={`group relative bg-gray1 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow ${project.featured ? 'md:col-span-2' : ''}`}>
      {/* Image Placeholder */}
      <div className="h-48 bg-gray0 flex items-center justify-center">
        <div className="text-6xl text-gray2 opacity-30 group-hover:opacity-50 transition-opacity">
          {project.featured ? <FaRobot /> : <FaCode />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-lighter transition-colors">
          {project.title}
        </h3>
        <p className="text-gray2 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-gray0 text-green-lighter rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.link}
            className="flex items-center text-sm text-gray2 hover:text-green-lighter transition-colors"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center text-sm text-gray2 hover:text-green-lighter transition-colors"
          >
            <FaGithub className="mr-1" /> Code
          </a>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-1 bg-green-lighter text-gray1 text-xs font-bold rounded">
          Featured
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-12 bg-gray0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs text-green-lighter uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-green-lighter">Projects</span>
          </h2>
          <p className="text-gray2 mt-4 max-w-2xl mx-auto">
            A showcase of AI-powered solutions, web applications, and digital tools
            that transform businesses and grow communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/matrix105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-green-lighter text-green-lighter rounded hover:bg-green-lighter hover:text-gray1 transition-all duration-300"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
