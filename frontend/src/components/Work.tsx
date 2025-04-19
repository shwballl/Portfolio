const Work = () => {
    return (
        <section id="work" className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-gradient-to-r from-purple-800 to-indigo-700 flex items-center">
            <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
                <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
                    <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                        <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                            <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                            <p>My Path</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
                            Professional Experience
                        </h2>
                    </div>

                    <p className="p-3 text-gray-300 text-sm leading-relaxed">
                        My career journey has been marked by continuous growth, taking on increasing responsibilities and tackling complex technical challenges.
                    </p>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    {[
                        {
                            title: "Python Backend Developer",
                            company: "SashasCorner",
                            date: "2024 – Present",
                            desc: [
                                "Developed and maintained Python-based web applications using Django, Django REST Framework, and other tools.",
                            ],
                            tech: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Docker"],
                            logo: "🚀"
                        },
                    ].map((job, idx) => (
                        <div 
                            key={idx}
                            className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                {job.logo}
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-purple-700">{job.title}</h3>
                                    <p className="text-indigo-600 font-medium">{job.company}</p>
                                </div>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.date}</span>
                            </div>
                            <ul className="space-y-3 mt-4">
                                {job.desc.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {job.tech.map((t, i) => (
                                    <span 
                                        key={i} 
                                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;