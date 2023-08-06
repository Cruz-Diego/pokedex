import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState<any>({});
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [name]);

  return (
    <section className="flex flex-col justify-center items-center gap-4 pt-12">
      <h1 className="text-7xl">{name}</h1>
      <figure>
        <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt=""/>
      </figure>
      <p className="text-5xl">N# {pokemon?.id}</p>
      <div className="flex gap-7 text-4xl">
        <p>Type</p>
        <div className="bg-red-500 rounded-md flex justify-center items-center w-32 h-12">
          <p className="text-3xl">{pokemon["types"]?.[0]?.type.name}</p>
        </div>       
      </div>
      <div className="flex gap-7 text-1xl">
       <p className="text-4xl">Abilities</p>
        <div className="bg-red-500 rounded-md flex justify-center items-center w-52 h-12">
         <p>{pokemon["abilities"]?.[0]?.ability?.name}</p>
        </div>
        <div className="bg-red-500 rounded-md flex justify-center items-center w-52 h-12">
         <p>{pokemon["abilities"]?.[1]?.ability?.name}</p>
        </div>
      </div>
      <div className=" flex gap-7 text-4xl">
        <p>Games</p>
        <p className="text-red-700">{pokemon["game_indices"]?.[0]?.version?.name}</p>
        <p className="text-blue-700">{pokemon["game_indices"]?.[1]?.version?.name}</p>
        <p className="text-yellow-300">{pokemon["game_indices"]?.[2]?.version?.name}</p>
        <p className="text-yellow-600">{pokemon["game_indices"]?.[3]?.version?.name}</p>
        <p className="text-zinc-400">{pokemon["game_indices"]?.[4]?.version?.name}</p>
      </div>
    </section>
  );
}
