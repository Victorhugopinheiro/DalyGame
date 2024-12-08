import Image from "next/image"
import { Game } from "../../../utils/types/game"
import Link from "next/link"
import { BiRightArrowCircle } from "react-icons/bi"

interface GameProps {
    data: Game
}

export function Grid({ data }: GameProps) {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">

                <div className="relative w-full h-96 hover:scale-105 transition-all duration-300  ">
                    <Image className="rounded-lg object-cover  "
                        alt={`${data.title}`}
                        src={`${data.image_url}`}
                        quality={100} 
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                    />

                </div>

                <div className="flex items-center mt-4 justify-between">
                    <span className=" text-sm font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</span>

                    <BiRightArrowCircle size={26} />
                </div>

            </section>
        </Link>
    )
}

