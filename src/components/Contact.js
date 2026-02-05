import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-zinc-950 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-3xl font-bold text-primary">
  Let's Connect</h2>

            <p className="text-gray-800 dark:text-gray-200">
              I'm always interested in new opportunities and open to work form anywhere. Please connect with me through email or LinkedIn, or feel free to send me a message using the contact form. I look forward to hearing from you and working together!
            </p>

            {/* Contact Links */}
            <div className="space-y-3">
              <a
                href="mailto:susmithalakshmi666@gmail.com"
                className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                <FaEnvelope className="w-5 h-5 text-lavender" /> susmithalakshmi666@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/susmithalakshmi-karri-074465257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                <FaLinkedin className="w-5 h-5 text-lavender" /> LinkedIn
              </a>
              <a
                href="https://github.com/SusmithaLakshmiKarri26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                <FaGithub className="w-5 h-5 text-lavender" /> GitHub
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="space-y-4 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
            <div>
              <label className="block mb-1 font-medium text-lavender">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-lavender">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-lavender">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-lavender transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
