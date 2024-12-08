import { Container } from "@/components/container";
import logo from "../../../public/user.png"
import Image from "next/image";
import { FaShare, FaShareAlt } from "react-icons/fa";
import { FavoritGame } from "./components/favoritGame";
import { Metadata } from "next";
import { title } from "process";


export const metadata:Metadata = {
    title: "Meu perfil - Daly Games sua plataforma de jogos",
    description:"Aqui você encontra diversos jogos"
}


export default function Profile() {
    return (
        <main className="w-full">
            <Container>
                <section className="my-10  relative flex flex-col w-full items-center sm:flex-row sm:justify-between">
                    <div className="flex flex-col justify-center gap-3 items-center sm:flex-row sm:justify-start">
                        <Image className="rounded-full w-52 h-52  hover:scale-110 duration-300" alt="logo" src={logo} />

                        <p className="font-bold text-xl">Victor</p>

                    </div>

                    <div className=" mt-5 absolute top-0 right-0 flex gap-3 items-center sm:flex-row  ">
                        <button className="bg-gray-700 p-1 rounded-sm text-white">
                            Configurações
                        </button>

                        <button className="bg-gray-700 p-1 rounded-sm">
                            <FaShareAlt size={18} color="white" />
                        </button>
                    </div>
                </section>

                <section className="w-full gap-5  flex flex-wrap flex-col md:flex-row">
                    <div className="flex-wrap flex-grow">
                        <FavoritGame />
                    </div >

                    <div className="flex-wrap flex-grow">
                        <FavoritGame />
                    </div>

                    <div className="flex-wrap flex-grow">
                        <FavoritGame />
                    </div>

                </section>
            </Container>
        </main>
    )
}