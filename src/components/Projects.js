import { FaGithub } from "react-icons/fa";
export default function Projects() {
  const projects = [
    {
      title: "Self Audiometric Test",
      description:
        "React-based web app for testing hearing disabilities and provided with automated audiogram reports.",
      technologies: ["React", "JavaScript", "Bootstrap"],
      demo: "https://self-audiometric-test.vercel.app/",
      code: "https://github.com/SusmithaLakshmiKarri26/SelfAudiometryTest",
    },
    {
      title: "Encrypted File Vault",
      description:
        "Secure web application for encrypted file upload, storage and accessing enhanced with OTP-based authentication.",
      technologies: ["Flask", "Python", "SQLite"],
      demo: "https://encrypted-file-vault-1.onrender.com/",
      code: "https://github.com/SusmithaLakshmiKarri26/Encrypted-File-Vault",
    },
    {
      title: "X-PerioDetect",
      description:
        "Desktop application using CNN model to classify dental X-ray images for periodontitis detection.",
      technologies: ["Python", "Keras", "Tkinter"],
      demo: "#",
      code: "https://github.com/SusmithaLakshmiKarri26/X-PerioDetect",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-zinc-950 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6 border-l-4 border-primary hover:shadow-xl transition"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-lavender mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-softlav text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo & Code buttons */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-lavender text-white rounded hover:bg-purple-600 transition"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-lavender text-white rounded hover:bg-purple-600 transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}