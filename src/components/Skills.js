export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "ReactJS", "Flask"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite"],
    },
    {
      category: "Developer Tools",
      items: ["Visual Studio", "Git", "GitHub", "Power BI"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Leadership", "Teamwork", "Communication"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-white dark:bg-zinc-950 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <div
              key={skill.category}
              className="bg-white dark:bg-zinc-900 border-l-4 border-primary shadow-md p-6 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-lavender">
                {skill.category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
