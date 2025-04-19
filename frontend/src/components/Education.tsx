const Education = () => {
    return (
        <section id="education" className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-gradient-to-r from-purple-800 to-indigo-700 flex items-center">
            <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
                <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
                    <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                        <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                            <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                            <p>My Journey</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
                            Academic Background & Achievements
                        </h2>
                    </div>

                    <p className="p-3 text-gray-300 text-sm leading-relaxed">
                        My educational path has equipped me with both theoretical knowledge and practical skills that I apply daily in my work.
                    </p>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <div
                        className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        data-aos="fade-up"
                    >
                        <div className="absolute -top-3 -left-3 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-purple-700 mb-2">Bachelor of Software engineering</h3>
                        <p className="text-indigo-600 font-medium"> 2024 - 2028</p>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Specialized in full-stack development, data structures, and AI. Final project involved building a scalable recommendation engine using collaborative filtering.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Education;