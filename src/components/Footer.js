import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:susmithalakshmi666@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/susmithalakshmi-karri-074465257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/SusmithaLakshmiKarri26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <p className="text-sm text-lavender dark:text-gray-300">
            © Susmitha Lakshmi Karri
          </p>

        </div>
      </div>
    </footer>
  );
}
