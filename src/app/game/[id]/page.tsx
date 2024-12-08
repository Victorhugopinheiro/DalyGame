import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { Game } from "../../../../utils/types/game";
import { Grid } from "@/components/grid";
import next, { Metadata } from "next";

interface ParamsUrl {
    params: {
        id: string
    }
}

export async function generateMetadata ({params}:ParamsUrl):Promise<Metadata> {
    try {
        const response: Game = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, { next: { revalidate: 60 } })
            .then((res) => res.json())
            .catch(() => {
                return {
                    title: "DalyGames - descubra jogos incriveis para se divertir"
                }
            })
        return {
            title: response.title,
            description: `${response.description.slice(0, 100)}...`,
            openGraph: {
                title: response.title,
                images: [response.image_url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }
        

        
    } catch {
        return {
            title: "DalyGames - encontre os melhores jogos para se divertir"
        }
    }

}


async function getDetail(id: string) {

    const response = await fetch(`${process.env.API_ID}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } })

    return response.json()
}

async function randomGame() {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-cache" })

    return response.json()
}

export default async function Detail({ params: { id } }: { params: { id: string } }) {

    const detailGame: Game = await getDetail(id)

    const game: Game = await randomGame()



    console.log(game)

    return (

        <main className="w-full">
            <div className=" w-full relative h-80 mb-8 sm:h-96">
                <Image className="object-cover h-80 w-full sm:h-96 opacity-90" alt="Imagem do projeto" src={detailGame.image_url}
                    sizes="(max-width :768px) 100vw, (max-width: 1200px) 44vw"
                    fill={true}
                    priority={true}
                    quality={100} />
            </div>
            <Container>



                <div className="my-2">
                    <span className="  text-sm font-bold">{detailGame.title}</span>
                </div>

                <p className="mb-8">
                    {detailGame.description}
                </p>

                <p className="font-bold">Plataformas disponiveis</p>

                <div className="flex gap-5 mb-8 ">
                    {detailGame.platforms.map((item) => (
                        <div key={item} className="flex-grow sm:flex-grow-0">
                            <p className="hover:font-bold">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="font-bold">Categorias</p>

                <div className="flex gap-5 mb-8 ">
                    {detailGame.categories.map((item) => (
                        <div key={item} className="flex-grow sm:flex-grow-0">
                            <p className="hover:font-bold">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-1 mb-8">
                    <p className="font-bold">Lançamento:</p>
                    <span>{detailGame.release} </span>
                </div>



                <h2 className="font-bold mb-2">Jogo recomendado: </h2>
                <div className="flex">
                    <div className="flex-grow ">
                        <Grid data={game} />
                    </div>
                </div>




            </Container>
        </main>

    )
}