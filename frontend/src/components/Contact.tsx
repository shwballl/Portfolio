import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // Replace with your actual email sending API endpoint
            const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setStatus({
                    submitted: true,
                    success: true,
                    message: 'Your message has been sent successfully!'
                });
                // Clear form
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            setStatus({
                submitted: true,
                success: false,
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-gradient-to-r from-purple-800 to-indigo-700 flex items-center">
            <div className="container mx-auto px-5 py-24">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-16 w-full">
                    <div className="w-full md:w-1/2 relative p-6 sm:px-12 md:p-0">
                        <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                            <div className="absolute -left-4 top-16 sm:left-16 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                                <div className="xl:w-8 md:w-10 sm:w-8 w-8 h-[1px] bg-white mt-2 mx-auto"></div>
                                <p>Get In Touch</p>
                            </div>

                            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
                                Let's Connect
                            </h2>
                        </div>

                        <p className="p-3 text-gray-300 text-sm leading-relaxed mb-8">
                            Feel free to reach out with questions, feedback, or collaboration opportunities. I'm always interested in new projects and connections.
                        </p>

                        <div className="p-6 space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Email</h3>
                                    <a href="mailto:kyzyanazar@gmail.com" className="text-indigo-200 hover:text-white transition-colors">kyzyanazar@gmail.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Location</h3>
                                    <p className="text-indigo-200">Vinnytsia city, 98 Keletska street</p>
                                </div>
                            </div>
                            
                            <div className="mt-12">
                                <h3 className="font-medium text-white mb-4">Follow Me</h3>
                                <div className="flex space-x-4">
                                    <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" href="https://facebook.com/">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" href="https://x.com/shwballl">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" href="https://instagram.com/shwballl">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors" href="https://github.com/shwballl">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div 
                            className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                            data-aos="fade-up"
                        >
                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                ✉️
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                            
                            {status.submitted && (
                                <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>
                                    {status.message}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full rounded border border-white/20 bg-white/5 py-3 px-4 text-base text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" 
                                        placeholder="Your Name" 
                                    />
                                    <label className="absolute left-4 -top-6 text-sm text-indigo-200 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-200">
                                        Your Name
                                    </label>
                                </div>
                                
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full rounded border border-white/20 bg-white/5 py-3 px-4 text-base text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" 
                                        placeholder="Your Email" 
                                    />
                                    <label className="absolute left-4 -top-6 text-sm text-indigo-200 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-200">
                                        Your Email
                                    </label>
                                </div>
                                
                                <div className="relative">
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="peer h-40 w-full resize-none rounded border border-white/20 bg-white/5 py-3 px-4 text-base text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30" 
                                        placeholder="Your Message"
                                    ></textarea>
                                    <label className="absolute left-4 -top-6 text-sm text-indigo-200 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:left-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-200">
                                        Your Message
                                    </label>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="group relative w-full flex justify-center py-3 px-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                                    {loading ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;