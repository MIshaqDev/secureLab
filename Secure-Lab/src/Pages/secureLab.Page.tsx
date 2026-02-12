import { Link } from "react-router-dom";
import { Lock, FileKey, ShieldAlert, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function SecureLabPage() {
    const tools = [
        {
            title: "Caesar Cipher",
            description: "A simple substitution technique shifting letters by a fixed number.",
            path: "/ceaser",
            icon: <Lock size={32} />,
            color: "text-[var(--primary-color)]",
            borderColor: "border-[var(--primary-color)]"
        },
        {
            title: "Monoalphabetic",
            description: "Replace each letter with a fixed corresponding letter from a shuffled alphabet.",
            path: "/monoalphabetic",
            icon: <FileKey size={32} />,
            color: "text-blue-400",
            borderColor: "border-blue-400"
        },
        {
            title: "Vigenère Cipher",
            description: "Encrypt text using a keyword to shift letters variably.",
            path: "/vigener",
            icon: <ShieldAlert size={32} />,
            color: "text-purple-400",
            borderColor: "border-purple-400"
        },
        {
            title: "Row Transposition",
            description: "Shuffle characters based on a numeric key and column order.",
            path: "/row-transposition",
            icon: <Cpu size={32} />,
            color: "text-red-400",
            borderColor: "border-red-400"
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl font-bold text-white">Security Lab Dashboard</h1>
                <p className="text-[--text-muted] text-lg max-w-2xl mx-auto">
                    Select an encryption tool to start experimenting with cryptographic algorithms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={tool.path}
                            className="pro-card block p-8 h-full hover:border-opacity-50 group relative overflow-hidden"
                        >
                            <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${tool.color}`}>
                                {tool.icon}
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[--primary-color] transition-colors">
                                {tool.title}
                            </h2>

                            <p className="text-[--text-muted] mb-8 leading-relaxed">
                                {tool.description}
                            </p>

                            <div className={`flex items-center gap-2 font-medium ${tool.color} md:opacity-0 md:translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                                Launch Tool <ArrowRight size={18} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SecureLabPage;