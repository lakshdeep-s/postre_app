import { LoginForm } from "@/components/UserJoinForm/LoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="min-h-screen w-full grid grid-cols-2">
            {/* Image or Cover here */}
            <div className="bg-zinc-500">
                <div className="logo text-white text-[1.5rem] font-semibold px-6 py-6">Postre</div>
            </div>

            {/* Signup Form Here */}
            <div className=" flex flex-col items-center justify-center">
                <div className="p-[2rem] border-[1.5px] rounded-md shadow-lg">
                    <LoginForm/>   
                    <p className="text-center mt-[1rem]">
                        Don't have an account ? <Link href="/login" className="text-blue-400">Register</Link>
                    </p>             
                </div>
            </div>
        </div>
    )
}
export default LoginPage;