function About(){
    return(
        <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] flex flex-col items-center p-10 w-[100%]">
            <h2 className="text-4xl font-bold mb-6 text-center">About Secure Lab</h2>
            <ul className="[&>li]:text-xl mb-4 [&>li]:mb-3 [&>li]:list-disc [&>li]:list-inside flex flex-col items-start gap-3 [&>input]:text-justify max-w-3xl mt-4">
                <li>Secure Lab is an interactive platform designed to help users explore and understand the world of cryptography.</li>
                <li>Our project allows users to encrypt and decrypt messages using traditional & powerful ciphers: Caesar, Monoalphabetic, Vigenère, Row Transposition ciphers</li>
                <li>Due to real-time processing and a clean, intuitive interface, Secure Lab makes learning encryption both practical and engaging.</li>
                <li>Built using React and Express.js, the platform operates entirely without a database, making it fast, lightweight, and easy to use.</li>
                <li>Whether you’re a student, developer, or simply curious about secure communication, Secure Lab gives you the tools to experiment, learn, and master the art of encryption.</li>
            </ul>
        </div>
    )
}

export default About;