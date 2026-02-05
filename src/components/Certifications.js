import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Udemy",
      description: "Complete Full Stack Web Development Bootcamp.",
      icon: <FaCertificate className="text-primary w-6 h-6" />,
      link: "https://drive.google.com/file/d/18wUcoz1iJjKwZCcSPACsRQlVX_upaBy9/view?pli=1",
    },
    {
      title: "NPTEL",
      description: "Database Management Systems.",
      icon: <FaCertificate className="text-primary w-6 h-6" />,
      link: "https://drive.google.com/file/d/1QaijiKKvF0VFsR4rzbCSdze0PHzSVePM/view?usp=sharing",
    },
    {
      title: "NPTEL",
      description: "Programming through JAVA.",
      icon: <FaCertificate className="text-primary w-6 h-6" />,
      link: "https://drive.google.com/file/d/1DHNlODr4hu5Edaxru9Zd3MiLU2CWnUgi/view?usp=drivesdk",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 bg-white dark:bg-zinc-950 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">Certifications</h2>


        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col justify-between"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                {cert.icon}
                <h3 className="text-lg font-semibold text-lavender">{cert.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-800 dark:text-gray-200 mb-4">{cert.description}</p>

              {/* View Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded hover:bg-lavender transition text-sm font-medium text-center"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
