function Footer(){
    return (
            <footer className="bg-black text-[var(--text-color)] py-6 w-[100%]">
                <div className="container mx-auto text-center">
                    <p className="text-sm ">&copy; {new Date().getFullYear()} Secure Lab — Developed by Muhammad Ishaq</p>
                </div>
            </footer>
    )
}

export default Footer;