import { Container } from "@/components/container";
import Image from "next/image";
import { Game } from "../../utils/types/game"
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
import Input from "@/components/input";
import { Grid } from "@/components/grid";


async function getDados() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}})

    return response.json()

  } catch (error) {
    console.log(error)
  }
}

async function getDado() {
  try {
    const responsee = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next: {revalidate: 320}})

    return responsee.json()

  } catch (error) {
    console.log(error)
  }


}

export default async function Home() {

  const dalyGames: Game = await getDados()

  const getGames: Game[] = await getDado()


  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center my-6 text-xl font-bold">Separamos um jogo exclusivo para você</h1>

        <Link href={`/game/${dalyGames.id}`}>
          <section className=" w-full">
            <div className="w-full relative max-h-96 h-96 rounded-lg ">
              <div 
              className="absolute z-20 flex gap-2 justify-center items-center
              p-3 bottom-0">
                <p className="text-xl font-bold text-white">{dalyGames.title}</p>
                <BsArrowRightSquare size={26} color="#fff" />
              </div>

              <Image src={dalyGames.image_url} alt={dalyGames.title}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 "
                priority={true} quality={100} fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw"

              />
            </div>
          </section>

        </Link>

        <Input/>

        <h1 className="text-xl font-bold my-6">Jogos para conhecer</h1>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getGames.map((item) => (
            <Grid key={item.id} data={item}/>
          ))}

        </section>
      </Container>

    </main>
  );
}
