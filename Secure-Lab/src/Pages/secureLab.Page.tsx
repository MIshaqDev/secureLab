function SecureLab(){
    return (
        <div className="min-h-screen w-screen bg-[var(--background-color)] text-[var(--text-color)] flex flex-col items-center p-10  mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Secure Lab Page</h1>
            <p className="text-md font-bold text-center ">Welcome to the Secure Lab. This section is your gateway to exploring different encryption techniques used in cryptography. Choose any cipher below to start encrypting and decrypting messages in real time. Each cipher demonstrates a unique approach to securing information, from classical substitution methods to modern encryption logic. Click a cipher to dive in, experiment with keys, and understand how secure communication works.</p>
            <nav>
                <ul className="flex flex-col space-y-4 [&>li]:border [&>li]:rounded-full [&>li]:border-[var(--primary-color)] pb-4 px pt-4 px-6 [&>li]:hover:bg-[var(--text-color)] [&>li]:hover:text-[var(--card-background)] [&>li]:text-center [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li]:text-md [&>li]:p-5 font-bold mt-10 md:[&>li]:w-150 md:[&>li]:text-2xl">
                    <li><a href="/ceaser" >Ceaser Cipher</a></li>
                    <li><a href="/monoalphabetic">Monoalphabetic Cipher</a></li>
                    <li><a href="/vigener">Vigener Cipher</a></li>
                    <li><a href="/row-transposition">Row Transposition Cipher</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default SecureLab;