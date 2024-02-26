import "./styles/index.css"
import { useState, useEffect } from "react";
import Card from "./components/Card"

function PokemonAPI({ project, currentProject }) {
    const [pokedex, setPokedex] = useState([]);
   

    //! UNCOMMENT CODES BELOW TO RUN THİS APP
    useEffect(() => {
        const getData = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await res.json();
            setPokedex((preState) => {
                return [...preState, data];
            });
        };
        const total = Array(151).fill("p");
        total.forEach((item, index) => getData(index + 1));
    }, []);

    return (
        <div
            className=" justify-center items-center flex-wrap gap-4 p-4"
            style={{
                display: project === currentProject ? "flex" : "none",
            }}
        >
            {pokedex
                .sort((a, b) => a.id - b.id)
                .map((pokemon) => {
                    // console.log(pokemon);
                    //!! SADECE EVRİMLEŞMEMİŞ POKEMONLARI GÖSTERMEK İÇİN if(pokemon.base_experience < 72)
                    return <Card key={pokemon.id} pokemon={pokemon} />
                })}
        </div>
    );
}

export default PokemonAPI;
