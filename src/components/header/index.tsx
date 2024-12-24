import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Logo from "../../../public/logo.svg"
import Image from "next/image";
import { LiaGamepadSolid } from "react-icons/lia";




export function Header() {
    return (
        <header className="w-full px-2 h-28 bg-slate-100  ">
            <div className="max-w-screen-xl  flex items-center justify-center px-4 mx-auto h-28 sm:justify-between">
                <nav className="  flex gap-5 items-center justify-center">
                    <Link className="text-2xl text-black font-medium" href={"/"}>

                        <Image src={Logo} priority={true} alt="Imagem do meu header" quality={100} className="w-full" />
                    </Link>

                    <Link href={"/"}>Jogos</Link>
                    <Link href={"/profile"}>Perfil</Link>
                </nav>


                <div className="hidden sm:flex">
                    <Link href={"/profile"}>
                        <LiaGamepadSolid size={36} color="#475569" />
                    </Link>
                </div>

            </div>
        </header>
    )
}