import { FaCalendar, FaGlobe} from "react-icons/fa";

export default function About() {
  return (
    <section
  id="about"
  className="py-24 bg-white dark:bg-zinc-950 scroll-mt-10"
>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {/* Left side - About paragraph */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-gray-800 dark:text-white text-lg leading-relaxed">
            B.Tech graduate from Computer Science focusing on building practical, user-friendly applications with a focus on logic, security and real-world impact.
          </p>
          <h6 className="text-lavender font-semibold mt-4">Key Interests:</h6>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Problem Solving</li>

          </ul>
        </div>

        {/* Right side - Academic cards */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* B.Tech Card */}
          <div className="bg-white dark:bg-zinc-900 border-l-4 border-lavender shadow-md p-6 rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-lavender mb-2">B.Tech, Computer Science and Engineering</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><FaGlobe className="inline mr-2" /> Shri Vishnu Engineering College for Women, Bhimavaram</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><FaCalendar className="inline mr-2" /> 2022 - 2026</p>
            <p className="text-gray-700 dark:text-gray-300">CGPA: 9.04</p>
          </div>

          {/* Intermediate Card */}
          <div className="bg-white dark:bg-zinc-900 border-l-4 border-lavender shadow-md p-6 rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-lavender mb-2">Intermediate, MPC</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><FaGlobe className="inline mr-2" /> Aditya Junior College, Mandapeta</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><FaCalendar className="inline mr-2" /> 2020 - 2022</p>
            <p className="text-gray-700 dark:text-gray-300">CGPA: 9.70</p>
          </div>
        </div>
      </div>
    </section>
  );
}
