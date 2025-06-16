import { motion } from "framer-motion";

const projects = [
  {
    title: "Instapay API",
    description: "Node.js + Express.js",
    image: "/instapay.jpg",
    // link: "#",
  },
  {
    title: "Pesonet API",
    description: "Node.js + Express.js",
    image: "/PESONet.png",
    // link: "#",
  },
  {
    title: "Billspay API",
    description: "Node.js + Express.js",
    image: "/billspay.jpg",
    // link: "#",
  },
  {
    title: "WealthBank Website",
    description: "Php + Node.js + Bootstrap + Ajax",
    image: "/website.jpg",
    // link: "#",
  },
  {
    title: "DEPED Loan",
    description: "Node.js + JQuery + Bootstrap",
    image: "/deped.jpg",
    // link: "#",
  },
  {
    title: "Housing Loan",
    description: "Node.js + JQuery + Tailwind",
    image: "/housing.jpg",
    // link: "#",
  },
  {
    title: "HR Payroll",
    description: "Node.js + C# + ASP.net",
    image: "/payroll.png",
    // link: "#",
  },
  {
    title: "HR Assistant",
    description: "Node.js + C# + ASP.net",
    image: "/hrassistant.png",
    // link: "#",
  },
  {
    title: "Epurchasing",
    description: "Node.js + JQuery + Bootstrap",
    image: "/epurchasing.png",
    // link: "#",
  },
];

const Projects = () => (
    <section id='projects' className="min-h-screen bg-black px-6 py-20 text-white section">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto pt-10">
            {projects.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="bg-[#2a2a3d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.description}</p>
                        {/* <a href={p.link} className="text-purple-400 hover:underline mt-3 inline-block" >
                            View Project
                        </a> */}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default Projects;
