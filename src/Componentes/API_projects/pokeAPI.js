import React, {useState, useEffect} from 'react';
// poner un boton que lleve al siguente pokemon en la pokedex
//Agregar un boton X que al ser precionado borre el nombre escrito en el input text
//hacer que la tecla enter haga la busqueda del input text y no recargue la pagina
//Agregar un manejador de error que indique al usuario que el nombre del pokemon no existe o esta mal escrito
function Poke({name, avatar, id, hp, atk, def, spAtk, spDef, speed, weight, height, type, basePokemon, evolution, lastEvolution, basePokemonImg, evolutionImg, lastEvolutionImg}) {
    return(
        <div className='flex-col'>
            <h1 className="font-black">Pokemon</h1>
            <div className="border border-black">
                <img className="w-40 m-auto" src={avatar} alt={name}/>
                <p className="px-2"><span className="font-black">Nombre:</span> {name}</p>
                <p className="px-2"><span className="font-black">N°:</span> {id}</p>
                <p className="px-2"><span className="font-black">Peso:</span> {weight + ' kg'}</p>
                <p className="px-2"><span className="font-black">Altura:</span> {height + ' cm'}</p>
                <p className="px-2"><span className="font-black">Tipo:</span> {type} </p>
                <div className="px-2 py-2">
                    <h3 className="text-center font-black">Estadisticas</h3>
                    <table className="">
                        <thead>
                            <tr>
                                <th className="px-2 border border-black bg-slate-300">HP</th>
                                <th className="px-2 border border-black bg-slate-300">Attack</th>
                                <th className="px-2 border border-black bg-slate-300">Defense</th>
                                <th className="px-2 border border-black bg-slate-300">Special Attack</th>
                                <th className="px-2 border border-black bg-slate-300">Special Defense</th>
                                <th className="px-2 border border-black bg-slate-300">Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 border border-black">{hp}</td>
                                <td className="px-2 border border-black">{atk}</td>
                                <td className="px-2 border border-black">{def}</td>
                                <td className="px-2 border border-black">{spAtk}</td>
                                <td className="px-2 border border-black">{spDef}</td>
                                <td className="px-2 border border-black">{speed}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-row flex-wrap gap-x-3">
                        <h3 className="basis-full text-center font-black">Linea evolutiva</h3>
                        <div className="">
                            <img className="w-40" src={basePokemonImg} alt={basePokemon}/>
                            <p>
                                {basePokemon}
                            </p>
                        </div>
                        <div className="">
                            <img className="w-40" src={evolutionImg} alt={evolution}/>
                            <p>
                                {evolution}
                            </p>
                        </div>
                        <div className="">
                            <img className="w-40" src={lastEvolutionImg} alt={lastEvolution}/>
                            <p>
                                {lastEvolution}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PokeAPI() {
    const [pokemonNameF, setPokemonNameF] = useState('pikachu');
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonId, setPokemonId] = useState('');
    const [stats0, setStats0] = useState([]);
    const [stats1, setStats1] = useState([]);
    const [stats2, setStats2] = useState([]);
    const [stats3, setStats3] = useState([]);
    const [stats4, setStats4] = useState([]);
    const [stats5, setStats5] = useState([]);
    const [peso, setPeso] = useState([]);
    const [altura, setAltura] = useState([]);
    const [tipo, setTipo] = useState([]);

    const [basePokemon, setBasePokemon] = useState([]);
    const [evolution, setEvolution] = useState([]);
    const [lastEvolution, setLastEvolution] = useState([]);

    const [basePokemonImg, setBasePokemonImg] = useState([]);
    const [evolutionImg, setEvolutionImg] = useState([]);
    const [lastEvolutionImg, setLastEvolutionImg] = useState([]);


    useEffect(() => {
        async function FetchPokemon() {
            try {
                let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameF}`);
                let pokemon = await data.json();
                console.log(pokemon);
                setPokemonImg(pokemon.sprites.other.home.front_default);
                setPokemonId(pokemon.id);
                setStats0(pokemon.stats[0].base_stat);
                setStats1(pokemon.stats[1].base_stat);
                setStats2(pokemon.stats[2].base_stat);
                setStats3(pokemon.stats[3].base_stat);
                setStats4(pokemon.stats[4].base_stat);
                setStats5(pokemon.stats[5].base_stat);
                setPeso(pokemon.weight * 0.1);
                setAltura(pokemon.height * 10);
                setTipo(
                    pokemon.types.map((type) => {
                        return type.type.name + ' ';
                    }));
    
                let urlTest = pokemon.species.url
                let dataSpecies = await fetch(urlTest);
                let Species = await dataSpecies.json();
                let urlEvolution = Species.evolution_chain.url;
    
                let dataEvolution = await fetch(urlEvolution);
                let Evolution = await dataEvolution.json();
    
                setBasePokemon(Evolution.chain.species.name);
                setEvolution(Evolution.chain.evolves_to[0].species.name);
                setLastEvolution(Evolution.chain.evolves_to[0].evolves_to[0].species.name);
                
                //hasta aca todo funciona

                let dataBasePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${Evolution.chain.species.name}`);
                let BasePokemonData = await dataBasePokemon.json();
                let img1 = await BasePokemonData.sprites.other.home.front_default;

                let dataEvolutionPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${Evolution.chain.evolves_to[0].species.name}`);
                let EvolutionPokemonData = await dataEvolutionPokemon.json();
                let img2 = await EvolutionPokemonData.sprites.other.home.front_default;

                let dataLastEvolutionPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${Evolution.chain.evolves_to[0].evolves_to[0].species.name}`);
                let LastEvolutionPokemonData = await dataLastEvolutionPokemon.json();
                let img3 = await LastEvolutionPokemonData.sprites.other.home.front_default;
            
                setBasePokemonImg(img1);
                setEvolutionImg(img2);
                setLastEvolutionImg(img3);
            } catch (err) {
                console.error(err);
            }
        }
        FetchPokemon();
        return () => {
            setPokemonImg('');
            setPokemonId('');
            setStats0([]);
            setStats1([]);
            setStats2([]);
            setStats3([]);
            setStats4([]);
            setStats5([]);
            setPeso([]);
            setAltura([]);
            setTipo([]);
            setBasePokemon([]);
            setEvolution([]);
            setLastEvolution([]);
            setBasePokemonImg([]);
            setEvolutionImg([]);
            setLastEvolutionImg([]);
        }
    }, [pokemonNameF]);

    const ConsultaPoke = () => {
        setPokemonNameF(document.getElementById('pokemonSearch').value.toLowerCase());
    }
    return(
        <section className="">
            <h2 className="font-black text-xl">PokeAPI</h2>
            <form className="">
                <label className="px-2" htmlFor="pokemonSearch">Buscar Pokemon:</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2"/>
                <input type="button" value="Buscar" onClick={ConsultaPoke} className='bg-sky-50 hover:bg-sky-200 py-1 px-2 ease-in-out duration-300' />
            </form>
            <Poke name={pokemonNameF} avatar={pokemonImg} id={pokemonId} key={pokemonId} 
            hp={stats0} atk={stats1} def={stats2} spAtk={stats3} spDef={stats4} speed={stats5}
            weight={peso} height={altura} type={tipo}
            basePokemon={basePokemon} evolution={evolution} lastEvolution={lastEvolution}
            basePokemonImg={basePokemonImg} evolutionImg={evolutionImg} lastEvolutionImg={lastEvolutionImg}
            />
        </section>
    );
}