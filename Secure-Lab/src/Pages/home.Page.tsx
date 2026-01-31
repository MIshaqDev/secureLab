import logo from "../assets/Logo.png";

function HomePage() {
    return (
        <div className="flex flex-col items-center bg-[var(--background-color)] w-screen h-screen gap-5 pt-10">
            <img src={logo} alt="" className="w-30 rounded rounded-full hover:opacity-75" />
            <h1 className="text-[var(--text-color)] text-4xl font-bold font-[Space Mono] text-center md:text-4xl">Explore the World of Ciphers</h1>
            <p className="text-[var(--text-color)] m-10 text-2xl font-justify font-[Space Mono] text-center">Welcome to Secure Lab — your interactive cryptography playground. Experiment with classic ciphers like Caesar, Monoalphabetic, Vigenère, and Row Transposition, or explore our modern custom encryption. Enter your text, choose a key, and see your messages transform in real time. Secure Lab is designed to make learning encryption intuitive, hands-on, and fun, whether you’re a student, developer, or just curious about the world of secure communication. Dive in, encrypt your secrets, and discover the art of cryptography!</p>
            <a className="relative overflow-hidden px-6 py-3 font-bold text-[var(--secondary-color)] rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[#00ffea] group animate-bounce" href="/lab">
                <span className="absolute inset-0 w-full h-full transition-transform translate-x-[-100%] bg-gradient-to-r from-[#008cff] to-[#33ff00)] group-hover:translate-x-0"></span>
                <span className="relative z-50">Get Started</span>
            </a>

        </div>
    )
}
export default HomePage;