import { motion } from "framer-motion";

const blogs = [
  {
    title: "Getting Started with React",
    desc: "A beginner-friendly guide to React basics."
  },
  {
    title: "Why Tailwind CSS is Awesome",
    desc: "How Tailwind speeds up UI development."
  },
  {
    title: "Machine Learning for Students",
    desc: "Simple explanation of ML concepts."
  }
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-24 max-w-6xl mx-auto px-6 bg-white dark:bg-zinc-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-primary mb-10"
      >
        Blogs
        <div className="w-16 h-1 bg-lavender mt-2 rounded"></div>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="
              p-6 rounded-2xl
              bg-white dark:bg-zinc-800
              border border-lavender/40
              shadow
              hover:shadow-xl
              hover:border-primary
              hover:-translate-y-2
              transition
            "
          >
            <h3 className="text-xl font-medium text-primary">
              {blog.title}
            </h3>
            <p className="mt-2 text-lavender">
              {blog.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
