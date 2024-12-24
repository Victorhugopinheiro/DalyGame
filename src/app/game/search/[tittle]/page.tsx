import Input from "@/components/input";
import { Container } from "@/components/container/index";
import { Game } from "../../../../../utils/types/game";
import { Grid } from "@/components/grid";

async function getItem(tittle: string) {
try{
    const decodeUrl = decodeURI(tittle)
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeUrl}`)

    return response.json()
}catch(error) {
    console.log(error)
}
}


export default async function Tittle({ params }: { params:Promise<{tittle:string}> }) {

    const {tittle} = await params

    const item: Game[] = await getItem(tittle)

    return (
        <main>
            <Container>
                <Input />

                <h1 className="font-bold text-xl mt-8 mb-5">Veja oque encontramos na nossa base:</h1>

                {!item && (
                    <p>Jogo não encontrado...</p>
                )}

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {item && item.map((item) => (
                        <Grid key={item.id} data={item} />
                    ))}

                </section>


            </Container>
        </main>
    )
}