import React, {useState, useEffect} from 'react';
import 'css/pokeAPI.css';
// poner peso de pokemon, este viene en hectogramos, 1 hectogramo es igual a 0,1 kg
// poner linea evolutiva del pokemon con un button que lleve a sus datos en pantalla
// poner un boton que lleve al siguente pokemon en la pokedex
function Poke({name, avatar, id, hp, atk, def, spAtk, spDef, speed}) {
    return(
        <div className='flex-col'>
            <h1 className="font-black">Pokemon</h1>
            <div className="border border-black">
                <img className="w-40 m-auto" src={avatar} alt={name}/>
                <p className="px-2">Nombre: {name}</p>
                <p className="px-2">N°: {id}</p>
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
                </div>
            </div>
        </div>
    );
}

export default function PokeAPI() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonNameF, setPokemonNameF] = useState('pikachu');
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonId, setPokemonId] = useState('');
    const [stats0, setStats0] = useState([]);
    const [stats1, setStats1] = useState([]);
    const [stats2, setStats2] = useState([]);
    const [stats3, setStats3] = useState([]);
    const [stats4, setStats4] = useState([]);
    const [stats5, setStats5] = useState([]);

    async function FetchItem() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameF}`);
        let pokemon = await data.json();
        console.log(pokemon);
        setPokemons(pokemon);
        setPokemonImg(pokemon.sprites.front_default);
        setPokemonId(pokemon.id);
        setStats0(pokemon.stats[0].base_stat);
        setStats1(pokemon.stats[1].base_stat);
        setStats2(pokemon.stats[2].base_stat);
        setStats3(pokemon.stats[3].base_stat);
        setStats4(pokemon.stats[4].base_stat);
        setStats5(pokemon.stats[5].base_stat);
    }
    useEffect(() => {
        FetchItem();
    }, [pokemonNameF]);

    const ConsultaPoke = () => {
        setPokemonNameF(document.getElementById('pokemonSearch').value);
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
            hp={stats0} atk={stats1} def={stats2} spAtk={stats3} spDef={stats4} speed={stats5} />
        </section>
    );
}