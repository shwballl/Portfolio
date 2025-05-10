const Projects = () => {
    return (
        <section id="projects" className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-gradient-to-r from-purple-800 to-indigo-700 flex items-center">
            <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
                <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
                    <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                        <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                            <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                            <p>My Works</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
                            Creative Projects & Solutions
                        </h2>
                    </div>

                    <p className="p-3 text-gray-300 text-sm leading-relaxed">
                        Each project represents a unique challenge and solution, showcasing my ability to transform ideas into functional applications.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="grid gap-8 md:grid-cols-2">
                        {[
                            {
                                title: "Personal Portfolio Website",
                                desc: "A sleek, responsive React portfolio site with Framer Motion animations and dynamic theming.",
                                stack: ["React", "Tailwind", "Framer Motion", "Docker"],
                                link: "https://github.com/shwballl/portfolio",
                                icon: "💻"
                            },
                            {
                                title: "Report.ai",
                                desc: "This is the ...",
                                stack: ["React.js", "FastAPI", "Tailwindcss", "OpenAI", "LangChain", "Docker"],
                                link: "https://github.com/shwballl/AI-WORDLY",
                                icon: "🤖"
                            },
                            {
                                title: "Trivial - freelance app",
                                desc: "A React app for freelancers to manage their tasks and clients.",
                                stack: ["React.js", "Django REST", "Tailwind", "PostgreSQl", "Docker"],
                                link: "https://github.com/shwballl/trivial",
                                icon: "👷🏻‍♀️"
                            },
                            {
                                title: "AI-WORDLY",
                                desc: "This is the word guessing game that use AI to generate new words.",
                                stack: ["React.js", "FastAPI", "Tailwindcss", "OpenAI", "Docker"],
                                link: "https://github.com/shwballl/AI-WORDLY",
                                icon: "🎮"
                            }
                        ].map((proj, idx) => (
                            <div 
                                key={idx}
                                className="group bg-white/90 w-70  backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 100}
                            >
                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-200 transition-colors">
                                    {proj.icon}
                                </div>
                                <h3 className="text-xl font-bold text-purple-800 mb-2">{proj.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{proj.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.stack.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-purple-200 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a 
                                    href={proj.link} 
                                    className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                                >
                                    View Repo
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;