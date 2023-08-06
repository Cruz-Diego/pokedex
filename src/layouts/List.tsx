import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"

export default function List(){
    const [pokemons, setPokemons] = useState<any[]>([])


useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((res) => setPokemons(res.results))
  }, [])

    return(
        <main className="bg-neutral-950 text-neutral-100 text-2xl min-h-screen grid grid-cols-[1fr_4fr] ">
            <aside className="overflow-y-auto h-screen bg-red-600 flex flex-col gap-10">
                <header className="p-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
                </header>
                <section>
                    {pokemons.map((pokemon) => {
                        return (
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <div className="p-4 hover:bg-black/10 text-center cursor-pointer ">
                                    {pokemon.name}
                                </div>
                            </Link>
                        )
                    })}
                </section>
            </aside>
            <section>
                <Outlet />
            </section>
        </main>
    )
}
