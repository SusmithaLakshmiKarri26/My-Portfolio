import { FaTrophy, FaCode, FaUsers, FaStar, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "L&T Techgium Innovation Challenge",
      description:
        "Finalist in L&T Techgium Innovation Challenge, top 36 teams among 39000+ students at the national level.",
      icon: <FaTrophy className="text-primary w-6 h-6" />,
    },
    {
      title: "LeetCode",
      description: "Solved 400+ problems in LeetCode.",
      icon: <FaCode className="text-primary w-6 h-6" />,
    },
    {
      title: "Hackathon",
      description:
        "Achieved top 3 position in Appathon (24-Hour Hackathon) conducted in our college.",
      icon: <FaStar className="text-primary w-6 h-6" />,
    },
    {
      title: "NPTEL DBMS Exam",
      description: "Achieved top 5% ranking in the NPTEL DataBase Management System examination.",
      icon: <FaAward className="text-primary w-6 h-6" />,
    },
    {
      title: "Group Discussion",
      description:
        "Achieved 1st place in a group discussion organized by ISTE student chapter.",
      icon: <FaUsers className="text-primary w-6 h-6" />,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-16 bg-white dark:bg-zinc-950 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">Achievements</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-lavender">{item.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
