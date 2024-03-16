import Link from "next/link";

const LandingPage = () => {
    return (
        <>
            {/* Header Section */}
            <header className=" leading-tight text-center py-[3rem] flex flex-col">
                <h1 className="text-[4rem] font-bold">
                    Welcome to Postre
                </h1>
                <p className="text-[1.5rem] text-muted-foreground">
                    Read, Write, Inspire
                </p>

                {/* Header CTA */}
                <Link
                    href="/signup"
                    className="bg-muted-foreground w-fit mx-auto mt-[2rem] text-white px-[3rem] py-[1rem] font-semibold"
                >   
                    Join Now For Free
                </Link>
            </header>
        </>
    )
}
export default LandingPage;