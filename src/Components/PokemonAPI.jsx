import { useState, useEffect } from "react";

function PokemonAPI({ project, currentProject }) {
    const [pokedex, setPokedex] = useState([]);
    const typeColors = {
        bug: "#A8B820",
        poison: "#A040A0",
        grass: "#78C850",
        normal: "#A8A878",
        flying: "#A890F0",
        fire: "#F08030",
        water: "#6890F0",
        electric: "#F8D030",
        ground: "#E0C068",
        fairy: "#EE99AC",
        ice: "#98D8D8",
        fighting: "#C03028",
        psychic: "#F85888",
        rock: "#B8A038",
        steel: "#B8B8D0",
        ghost: "#705898",
        dragon: "#7038F8",
    };
    const statsColors = {
        hp: "#FF0000",
        attack: "#FFA500",
        defense: "#008000",
    };

    //! UNCOMMENT CODES BELOW TO RUN THİS APP
    // useEffect(() => {
    //     const getData = async (id) => {
    //         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //         const data = await res.json();
    //         setPokedex((preState) => {
    //             return [...preState, data];
    //         });
    //     };
    //     const total = Array(151).fill("p");
    //     total.forEach((item, index) => getData(index + 1));
    // }, []);

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
                    return (
                        <div
                            key={pokemon.id}
                            className=" border-[1px] border-red-500 rounded-md w-[102px] h-[128px] 
                                grid justify-items-center grid-rows-[1fr,auto] relative bg-yellow-300 isolate"
                        >
                            <p className=" absolute right-0 px-1 text-white bg-black rounded-md -z-10">
                                {pokemon.base_experience}
                            </p>
                            <img
                                src={pokemon.sprites.other.showdown.front_shiny}
                                alt=""
                                className=" self-center max-h-[72px]"
                            />
                            <p
                                className=""
                                style={{ fontVariant: "all-small-caps" }}
                            >
                                {pokemon.name}
                            </p>
                            <div className=" absolute bottom-8 right-0 grid gap-1 p-1 -z-10 ">
                                {pokemon.types.map((type) => {
                                    return (
                                        <p
                                            key={type.type.name}
                                            className="w-4 aspect-square border-[1px] border-red-500 rounded-sm"
                                            style={{
                                                backgroundColor: `${
                                                    typeColors[type.type.name]
                                                }`,
                                            }}
                                        ></p>
                                    );
                                })}
                            </div>

                            <div className=" flex p-1 gap-1">
                                <p
                                    className=" text-white px-1"
                                    style={{
                                        backgroundColor: `${statsColors["hp"]}`,
                                    }}
                                >
                                    {pokemon.stats.map((item) => {
                                        if (item.stat.name === "hp")
                                            return item.base_stat;
                                    })}
                                </p>
                                <p
                                    className=" text-white px-1"
                                    style={{
                                        backgroundColor: `${statsColors["attack"]}`,
                                    }}
                                >
                                    {pokemon.stats.map((item) => {
                                        if (item.stat.name === "attack")
                                            return item.base_stat;
                                    })}
                                </p>
                                <p
                                    className=" text-white px-1"
                                    style={{
                                        backgroundColor: `${statsColors["defense"]}`,
                                    }}
                                >
                                    {pokemon.stats.map((item) => {
                                        if (item.stat.name === "defense")
                                            return item.base_stat;
                                    })}
                                </p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default PokemonAPI;
