import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Terminal, Activity, ArrowRight, Code } from "lucide-react";
import logo from "../assets/Logo.png";

function HomePage() {
    return (
<<<<<<< HEAD
        <div className="flex flex-col items-center bg-[var(--background-color)] w-screen min-h-screen gap-5 pt-10">
            <img src={logo} alt="" className="w-30 rounded rounded-full hover:opacity-75" />
            <h1 className="text-[var(--text-color)] text-4xl font-bold font-[Space Mono] text-center md:text-4xl">Explore the World of Ciphers</h1>
            <p className="text-[var(--text-color)] m-10 text-2xl font-justify font-[Space Mono] text-center">Welcome to Secure Lab — your interactive cryptography playground. Experiment with classic ciphers like Caesar, Monoalphabetic, Vigenère, and Row Transposition, or explore our modern custom encryption. Enter your text, choose a key, and see your messages transform in real time. Secure Lab is designed to make learning encryption intuitive, hands-on, and fun, whether you’re a student, developer, or just curious about the world of secure communication. Dive in, encrypt your secrets, and discover the art of cryptography!</p>
            <a className="relative overflow-hidden px-6 py-3 font-bold text-[var(--secondary-color)] rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[#00ffea] group animate-bounce" href="/lab">
                <span className="absolute inset-0 w-full h-full transition-transform translate-x-[-100%] bg-gradient-to-r from-[#008cff] to-[#33ff00)] group-hover:translate-x-0"></span>
                <span className="relative z-50">Get Started</span>
            </a>
=======
        <div className="w-full flex flex-col items-center">

            {/* Hero Section */}
            <section className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 py-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-(--primary-color) blur-[80px] opacity-20 rounded-full"></div>
                    <img src={logo} alt="Secure Lab Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-2xl" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Master the Art of <span className="text-(--primary-color)">Encryption</span>
                    </h1>
                    <p className="text-lg md:text-xl text-(--text-muted) max-w-2xl mx-auto leading-relaxed">
                        Secure Lab is an interactive platform for learning cryptography.
                        Explore classic ciphers, understand security protocols, and protect your data.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                    <Link to="/lab" className="pro-button flex items-center gap-2 group shadow-lg shadow-(--primary-color)/20">
                        Start Encrypting <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/about" className="pro-button-outline flex items-center gap-2">
                        <Code size={18} /> Learn More
                    </Link>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="w-full py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Terminal size={32} />,
                            title: "Interactive Playground",
                            desc: "Real-time encryption and decryption with instant visual feedback."
                        },
                        {
                            icon: <Lock size={32} />,
                            title: "Classic Ciphers",
                            desc: "Hands-on practice with Caesar, Vigenère, and Monoalphabetic tools."
                        },
                        {
                            icon: <Shield size={32} />,
                            title: "Secure by Design",
                            desc: "Built with modern standards to demonstrate secure coding practices."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="pro-card p-8 bg-[--surface-color]"
                        >
                            <div className="mb-4 text-[--primary-color] p-3 bg-[--primary-color]/10 rounded-lg inline-block">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-[--text-muted] leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Bar */}
            <section className="w-full border-t border-white/5 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
                    <div>
                        <span className="block text-3xl font-bold text-[--primary-color]">5+</span>
                        <span className="text-sm text-[--text-muted] uppercase tracking-wider">Ciphers</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-[--secondary-color]">100%</span>
                        <span className="text-sm text-[--text-muted] uppercase tracking-wider">Client-Side</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-[--accent-color]">Free</span>
                        <span className="text-sm text-[--text-muted] uppercase tracking-wider">Open Source</span>
                    </div>
                    <div>
                        <span className="flex items-center justify-center gap-2 text-3xl font-bold text-emerald-500">
                            <Activity size={28} />
                        </span>
                        <span className="text-sm text-[--text-muted] uppercase tracking-wider">Active</span>
                    </div>
                </div>
            </section>
>>>>>>> ba4bd8f (UI imporved)

        </div>
    );
}

export default HomePage;