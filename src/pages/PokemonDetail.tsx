import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function PokemonDetail(){
    const [ pokemon, setPokemon] = useState<any>({})
    const { name } = useParams()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res))
    }, [name])

    return(
        <section>
            <figure>
                <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt="" />
            </figure>
            <h1></h1>
            <section></section>
        </section>
    )
}