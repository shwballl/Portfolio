const Navbar = () => {
    const button = document.querySelector('button[aria-expanded]');
    if (button) {
        button.addEventListener('click', function() {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isExpanded));
            document.getElementById('mobile-menu')!.classList.toggle('hidden', isExpanded);
        });
    }
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0 rounded-b-2xl bg-gradient-to-r from-purple-800 to-indigo-700 ">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <a href="#" className="flex-shrink-0 flex items-center">
                                <span className="ml-2 text-xl font-bold text-white">Nazar Kuzia</span>
                            </a>
                            <div className="hidden md:ml-10 md:flex md:space-x-10">
                                <a href="#" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                                    Home
                                </a>
                                <a href="#about" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                                    About Me
                                </a>
                                <a href="#projects" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                                    Projects
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:ml-4 md:flex md:items-center md:space-x-4">
                                <a href="#contact" className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                    Contact
                                </a>
                            </div>
                            <div className="flex items-center md:hidden">
                                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="true">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 bg-opacity-90">
                        <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            About Me
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            Projects
                        </a>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="mt-3 px-5">
                                <a href="#contact" className="block w-full text-center bg-white text-indigo-600 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-gradient-to-r from-purple-800 to-indigo-700 h-screen flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-xl text-base font-extrabold text-indigo-200 ">Junior Backend Developer</h1>
                    <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                        Hi, I'm Nazar Kuzia
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl">
                        I'm a backend developer with a passion for creating innovative solutions.
                    </p>
                    <div className="mt-10">
                        <a href="#contact" className="px-8 h-0 py-3 border border-transparent text-base font-medium rounded-3xl text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;