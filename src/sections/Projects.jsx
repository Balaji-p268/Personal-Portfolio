import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
const projects = [
  {
    title: "LMS",
    description:
      "LMS a web-based Learning Management System designed to streamline online education, allowing administrators, instructors, and students to manage courses, assignments, and learning progress effectively.",
    image: "/projects/project1.png",
    tags: ["HTML", "javascript", "css"],
    link: "#",
    github: "#",
  },
  {
    title: "An Intelligent Lost And Found Item Management System",
    description:
      "A smart lost and found solution with item tracking, user authentication, real-time reporting, and intelligent matching to help users quickly recover lost belongings.",
    image: "/projects/project2.png",
    tags: ["REACT.js", "node.js", "MangoDB", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Netflix Clone – Movie Streaming Platform",
    description:
      "A feature-rich movie streaming platform with secure user authentication, dynamic movie browsing, personalized categories, and real-time content integration using React and TMDB API.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Swiggy Clone – Food Delivery Platform",
    description:
      "A full-featured food delivery application with restaurant browsing, menu management, search and filtering, cart functionality, and responsive user experience powered by React and REST APIs.",
    image: "/projects/project4.png",
    tags: ["React.js", "Tailwind", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Mini Tourism Website",
    description:
      "A full-featured food delivery application with restaurant browsing, menu management, search and filtering, cart functionality, and responsive user experience powered by React and REST APIs.",
    image: "/projects/project5.png",
    tags: ["Html","CSS","javascript", "PHP"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <button className=" bg-violet-500 p-3 m-auto rounded-2xl hover:border-primary/50 animated-border ">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};