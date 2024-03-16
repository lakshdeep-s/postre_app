import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-[5rem] py-[1rem] sticky top-0 bg-white/40 backdrop-blur-md">
            {/* Logo */}
            <div className="logo text-[1.6rem] font-semibold">
                Postre
            </div>

            {/* Navlinks */}
            <div className="navlinks text-center flex gap-10 items-center font-semibold">
                <Link href="/home"> Home </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
                {/* CTA */}
                <Link href="/signup" className="bg-zinc-500 text-white font-medium px-[1rem] py-[0.2rem] rounded-md"> Sign Up </Link>
            </div>
        </nav>
    )
}
export default Navbar;