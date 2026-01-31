function Contact() {
  return (
    <div className="w-screen h-screen bg-[var(--background-color)] text-[var(--text-color)] flex flex-col items-center p-10 gap-12 pt-30">
      
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-xl text-center max-w-3xl mt-4">
          Secure Lab is an educational cryptography project built to explore and demonstrate encryption techniques.
          If you have feedback, suggestions, or would like to explore the codebase, feel free to reach out or visit the project repository.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h4 className="text-3xl font-bold">Get in touch</h4>

        <div className="text-4xl flex gap-8 [&>a]:hover:text-[var(--primary-color)] transition">
          <a
            href="mailto:muhammadishaq.dev@gmail.com"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            href="https://github.com/MIshaqDev/secureLab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a 
            href="https://muhammadishaq.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Contact;
