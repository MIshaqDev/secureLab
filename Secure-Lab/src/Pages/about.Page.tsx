import { motion } from "framer-motion";
import { User, FileText, Cpu, Github, Linkedin, Mail } from "lucide-react";

function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-12"
        >
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white">About the Developer</h1>
                <p className="text-(--text-muted) max-w-2xl mx-auto">
                    Passionate about cybersecurity, cryptography, and building secure applications.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="md:col-span-1">
                    <div className="pro-card p-6 flex flex-col items-center text-center space-y-4">
                        <div className="w-32 h-32 rounded-full bg-(--surface-color) border-2 border-(--primary-color) flex items-center justify-center overflow-hidden">
                            <User size={64} className="text-(--text-muted)" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Muhammad Ishaq</h2>
                            <p className="text-(--primary-color) font-medium">Full Stack Developer</p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-(--primary-color) hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-(--secondary-color) hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ishaq@example.com" className="p-2 rounded-full bg-white/5 hover:bg-(--accent-color) hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="md:col-span-2 space-y-6">
                    <div className="pro-card p-8 space-y-4">
                        <div className="flex items-center gap-3 text-(--primary-color) mb-2">
                            <FileText size={24} />
                            <h3 className="text-xl font-bold">Project Vision</h3>
                        </div>
                        <p className="text-(--text-muted) leading-relaxed">
                            Secure Lab was created to bridge the gap between theoretical cryptography and practical application.
                            It serves as an interactive educational tool for understanding how encryption algorithms work under the hood.
                        </p>
                    </div>

                    <div className="pro-card p-8 space-y-4">
                        <div className="flex items-center gap-3 text-(--secondary-color) mb-2">
                            <Cpu size={24} />
                            <h3 className="text-xl font-bold">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-(--text-color)">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default AboutPage;