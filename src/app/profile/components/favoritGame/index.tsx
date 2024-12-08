"use client"

import { useState } from "react"
import { FaShareAlt } from "react-icons/fa"
import { FiEdit, FiX } from "react-icons/fi"

export function FavoritGame() {
    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [game, setGame] = useState("")

    function createInput() {

        setShowInput(!showInput)

        setInput("")
        setGame("")
    }

    function addGame() {
        if (input === "") return

        setGame(input)
        setShowInput(!showInput)
    }

    return (
        <div className="h-36 w-full rounded-lg text-white bg-black p-5 flex flex-col justify-between hover:scale-105 duration-300">



            {showInput ? (
                <div className="flex w-full justify-between gap-3 ">
                    <input className="w-full px-2 rounded-lg text-black h-8" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={createInput} ><FiX size={18} /></button>
                </div>
            ) : (
                <div >
                    <FiEdit onClick={createInput} size={18} />
                </div>
            )}


            <div className=" h-8 flex  items-center ">
                {!game ? (
                    <div className=" text-xl font-bold ">
                        <button onClick={addGame}>
                         Adicionar
                    </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <p>Jogo Favorito: </p>
                        <button className="font-bold text-xl" onClick={addGame}>
                            
                            {game}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}