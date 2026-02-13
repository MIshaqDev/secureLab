import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Terminal, Activity, ArrowRight, Code } from "lucide-react";
import logo from "../assets/Logo.png";

function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center bg-(--background-color) w-screen min-h-screen gap-5">

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8">

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
            </div>

            {/* Features Grid */}
            <div className="p-10 flex flex-col items-center justify-center">
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
            </div>

            {/* Stats Bar */}
            <div className=" border-t border-white/5 w-full p-10">
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
            </div>
        </section>
    );
}

export default HomePage;