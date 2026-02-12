function Footer() {
    return (
        <footer className="bg-[--surface-color] text-[--text-muted] py-6 w-full border-t border-white/5">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Secure Lab. All rights reserved.
                </p>
                <p className="text-xs mt-2 opacity-50">
                    Developed by Muhammad Ishaq
                </p>
            </div>
        </footer>
    )
}

export default Footer;