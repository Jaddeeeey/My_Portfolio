import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-900 to-black text-white section">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full max-w-xl">

            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-4">
                Get In Touch
            </motion.h2>
        <motion.p
            variants={itemVariants}
            className="text-center text-lg text-gray-400 mb-10"
        >
            Whether you have a question, a project idea, or just want to say hi — I’d
            love to hear from you!
        </motion.p>

        <motion.form
            variants={containerVariants}
            action="https://formsubmit.co/jadehaha12@gmail.com"
            method="POST"
            className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
            
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <motion.div variants={itemVariants}>
                <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
                required
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
                required
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <textarea
                name="message"
                rows="5"
                placeholder="Let's connect!"
                className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
                required
                ></textarea>
            </motion.div>

            <motion.div variants={itemVariants}>
                <button
                type="submit"
                className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded text-white font-semibold transition duration-300 w-full"
                >
                Send Message
                </button>
            </motion.div>
            </motion.form>

        </motion.div>
    </section>
);

export default Contact;
