"use client"

import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";


import { Game } from "../../../utils/types/game";



export default function Input () {
    const[input, setInput] = useState("")
    const router = useRouter()


    function getInput (e:FormEvent) {
        e.preventDefault()

        if(input === "") return


        router.push(`game/search/${input}`)
    }

    return(
        <form onSubmit={getInput} className="my-5 h-7 w-full flex items-center justify-between bg-slate-100 rounded-sm px-2">

            <input className="w-11/12 outline-none bg-slate-100" placeholder="Procurando algo?..." value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" className="bg-slate-100"><FaSearch size={18} color="#ea580c" /></button>
        </form>
    )
}