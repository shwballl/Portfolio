

const TechSkills = () => {
    return (
        <>
            <section id="skills" className="min-h-screen w-full  md:px-8 xl:px-20 text-white bg-primary flex items-center bg-gradient-to-r from-purple-800 to-indigo-700">
                <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
                    <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
                        <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                            <div
                                className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                                <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                                <p>All Skills</p>
                            </div>

                            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
                                Explore My Expertise & Tech Stack
                            </h2>
                        </div>

                        <p className="p-3 text-gray-400 text-sm leading-relaxed">
                            These are the tools and technologies that I use daily to develop web
                            applications. With a deep understanding of these tools, I can build
                            powerful and dynamic web applications.
                        </p>

                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <img src="https://skillicons.dev/icons?i=python" className="w-8 h-8" />
                                    <p className="text-xs mt-2">Python</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <img src="https://skillicons.dev/icons?i=django" className="w-8 h-8" />
                                    <p className="text-xs mt-2">Django</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <img src="https://skillicons.dev/icons?i=fastapi" className="w-8 h-8" />
                                    <p className="text-xs mt-2">FastAPI</p>
                                </div>
                            </div>


                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F03C2E" rx="60" /><g clip-path="url(#skillIconsGit0)"><path fill="#fff" d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1 3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11" /></g><defs><clipPath id="skillIconsGit0"><path fill="#fff" d="M28 28h200v200H28z" /></clipPath></defs></g></svg>            </span>
                                    <p className="text-xs mt-2">Git</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <img src="https://skillicons.dev/icons?i=postgresql" className="w-8 h-8" />
                                    <p className="text-xs mt-2">PostgreSQL</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60" /><g clip-path="url(#skillIconsFigmaDark0)"><path fill="#0ACF83" d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228" /><path fill="#A259FF" d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333" /><path fill="#F24E1E" d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334" /><path fill="#FF7262" d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z" /><path fill="#1ABCFE" d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128" /></g><defs><clipPath id="skillIconsFigmaDark0"><path fill="#fff" d="M61 28h133.36v200H61z" /></clipPath></defs></g></svg>            </span>
                                    <p className="text-xs mt-2">Figma</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60" /><path fill="#fff" d="M84.745 111.961c0 2.434.263 4.407.723 5.855a35 35 0 0 0 2.106 4.737c.329.526.46 1.052.46 1.513c0 .658-.395 1.316-1.25 1.973l-4.145 2.764c-.592.394-1.184.592-1.71.592c-.658 0-1.316-.329-1.974-.921a20.4 20.4 0 0 1-2.368-3.092a51 51 0 0 1-2.04-3.882q-7.697 9.08-19.342 9.079c-5.526 0-9.934-1.579-13.158-4.737c-3.223-3.158-4.868-7.368-4.868-12.631c0-5.593 1.974-10.132 5.987-13.553s9.342-5.132 16.118-5.132c2.237 0 4.54.198 6.974.527s4.934.855 7.566 1.447v-4.803c0-5-1.053-8.487-3.092-10.526c-2.106-2.04-5.658-3.026-10.724-3.026c-2.303 0-4.671.263-7.105.855s-4.803 1.316-7.106 2.237a19 19 0 0 1-2.302.855c-.46.132-.79.198-1.053.198c-.92 0-1.382-.658-1.382-2.04v-3.224c0-1.052.132-1.842.461-2.302s.921-.921 1.842-1.382q3.454-1.776 8.29-2.96c3.223-.856 6.644-1.25 10.263-1.25c7.829 0 13.552 1.776 17.237 5.328c3.618 3.553 5.46 8.948 5.46 16.185v21.316zm-26.71 10c2.17 0 4.407-.395 6.776-1.185c2.368-.789 4.473-2.237 6.25-4.21c1.052-1.25 1.842-2.632 2.236-4.211s.658-3.487.658-5.723v-2.764a55 55 0 0 0-6.052-1.118a50 50 0 0 0-6.185-.395c-4.408 0-7.631.856-9.802 2.632s-3.224 4.276-3.224 7.566c0 3.092.79 5.394 2.434 6.973c1.58 1.645 3.882 2.435 6.908 2.435m52.828 7.105c-1.184 0-1.974-.198-2.5-.658c-.526-.395-.987-1.316-1.381-2.566l-15.46-50.855c-.396-1.316-.593-2.171-.593-2.632c0-1.052.526-1.645 1.579-1.645h6.447c1.25 0 2.106.198 2.566.658c.526.395.921 1.316 1.316 2.566l11.052 43.553l10.264-43.553c.329-1.316.723-2.17 1.25-2.566c.526-.394 1.447-.657 2.631-.657h5.263c1.25 0 2.106.197 2.632.657c.526.395.987 1.316 1.25 2.566l10.395 44.079l11.381-44.079c.395-1.316.856-2.17 1.316-2.566c.526-.394 1.382-.657 2.566-.657h6.118c1.053 0 1.645.526 1.645 1.644c0 .33-.066.658-.132 1.053c-.065.395-.197.92-.46 1.645l-15.855 50.855q-.593 1.974-1.382 2.566c-.526.394-1.382.658-2.5.658h-5.658c-1.25 0-2.105-.198-2.631-.658c-.527-.461-.987-1.316-1.25-2.632l-10.198-42.434l-10.131 42.368c-.329 1.316-.724 2.171-1.25 2.632c-.527.46-1.448.658-2.632.658zm84.54 1.776c-3.421 0-6.842-.395-10.132-1.184c-3.289-.79-5.855-1.645-7.566-2.632c-1.052-.592-1.776-1.25-2.039-1.842a4.65 4.65 0 0 1-.395-1.842v-3.355c0-1.382.526-2.04 1.513-2.04q.593 0 1.184.198c.395.131.987.394 1.645.658a35.8 35.8 0 0 0 7.237 2.302a39.5 39.5 0 0 0 7.829.79c4.145 0 7.368-.724 9.605-2.171c2.237-1.448 3.421-3.553 3.421-6.25c0-1.842-.592-3.356-1.776-4.606s-3.421-2.368-6.645-3.421l-9.539-2.96c-4.803-1.513-8.356-3.75-10.527-6.71c-2.171-2.895-3.289-6.12-3.289-9.54q0-4.144 1.776-7.303c1.184-2.105 2.763-3.947 4.737-5.394c1.974-1.514 4.211-2.632 6.842-3.422c2.632-.79 5.395-1.118 8.29-1.118c1.447 0 2.96.066 4.408.263c1.513.197 2.894.46 4.276.724c1.316.329 2.566.658 3.75 1.053q1.776.591 2.763 1.184c.921.526 1.579 1.052 1.974 1.644q.592.79.592 2.172v3.092c0 1.381-.526 2.105-1.513 2.105c-.527 0-1.382-.263-2.5-.79q-5.625-2.565-12.632-2.565c-3.75 0-6.71.592-8.75 1.842s-3.092 3.158-3.092 5.855c0 1.842.658 3.421 1.974 4.671s3.75 2.5 7.237 3.618l9.342 2.96c4.736 1.514 8.158 3.619 10.197 6.317s3.026 5.789 3.026 9.21c0 2.829-.592 5.395-1.71 7.632c-1.184 2.237-2.763 4.21-4.803 5.789c-2.039 1.645-4.474 2.829-7.302 3.685c-2.961.921-6.053 1.381-9.408 1.381" /><path fill="#F90" fill-rule="evenodd" d="M207.837 162.816c-21.645 15.987-53.092 24.474-80.132 24.474c-37.894 0-72.04-14.014-97.829-37.303c-2.04-1.842-.197-4.342 2.237-2.895c27.895 16.184 62.303 25.987 97.895 25.987c24.013 0 50.395-5 74.671-15.263c3.618-1.645 6.71 2.368 3.158 5" clip-rule="evenodd" /><path fill="#F90" fill-rule="evenodd" d="M216.85 152.553c-2.763-3.553-18.289-1.711-25.329-.856c-2.105.264-2.434-1.579-.526-2.96c12.368-8.684 32.697-6.184 35.066-3.29c2.368 2.961-.658 23.29-12.237 33.027c-1.777 1.513-3.487.723-2.698-1.25c2.632-6.513 8.487-21.185 5.724-24.671" clip-rule="evenodd" /></g></svg>            </span>
                                    <p className="text-xs mt-2">AWS</p>
                                </div>
                            </div>


                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60" /><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z" /><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z" /></g></svg>
                                    </span>
                                    <p className="text-xs mt-2">HTML5</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60" /><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z" /><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z" /></g></svg>
                                    </span>
                                    <p className="text-xs mt-2">CSS3</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60" /><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" /></g></svg>
                                    </span>
                                    <p className="text-xs mt-2">JavaScript</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#007ACC" rx="60" /><path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569" /></g></svg>
                                    </span>
                                    <p className="text-xs mt-2">TypeScript</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <img src="https://skillicons.dev/icons?i=react" className="w-8 h-8" />
                                    <p className="text-xs mt-2">React.js</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                                    <span className="text-4xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60" /><path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd" /><defs><linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32B1C1" /><stop offset="1" stop-color="#14C6B7" /></linearGradient></defs></g></svg>            </span>
                                    <p className="text-xs mt-2">TailwindCSS</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TechSkills;