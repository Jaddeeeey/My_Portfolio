import React, { useEffect, useRef } from 'react';
import profile from '../assets/profile1.png';
import resume from '../assets/JohnDaleCV.pdf';
import { motion } from "framer-motion";
import Typed from 'typed.js';

const About = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Web Developer.', 'Designer.', 'Full Stack.', 'Freelancer.'],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            id="about"
            className="min-h-screen px-6 py-20 bg-white dark:bg-[#1e1e2f] text-gray-800 dark:text-gray-200 section"
            style={{
                backgroundImage: "url('/bcgrnd1.jpg')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center pt-40"
            >
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-60 h-60 object-cover rounded-full border-4 border-black shadow-lg hover:scale-105 transition-transform"
                    />
                </div>

                {/* About Text */}
                <div>
                    <h2 className="text-4xl font-bold mb-2">J a d d e e e y</h2>

                    {/* Typed.js Text */}
                    <p className="text-2xl font-semibold mb-4">
                        I'm <span ref={typedRef} className="text-blue-600 dark:text-blue-400"></span>
                    </p>

                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        I'm a full-stack developer with a passion for building intuitive, user-friendly web applications. With experience in React, Node.js, and modern UI frameworks like Tailwind CSS and Bootstrap, I focus on creating elegant and efficient code.
                    </p>

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        I love solving problems, designing smooth user experiences, and constantly learning new technologies. I also enjoy collaborating on open-source projects and contributing to the dev community.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black px-3 py-1 rounded-full text-sm">JQuery</span>
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black px-3 py-1 rounded-full text-sm">Ajax</span>
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black px-3 py-1 rounded-full text-sm">MySql</span>
                    </div>

                    <a
                        href={resume}
                        download
                        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
