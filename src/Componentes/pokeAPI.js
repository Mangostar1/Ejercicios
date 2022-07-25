import React, {useState, useEffect} from 'react';
import 'css/pokeAPI.css';

//agregar id del pokemon en la pokedex

function Poke({name, avatar, id, hp, atk, def, spAtk, spDef, speed}) {
    return(
        <div className='flex'>
            <h1 className="font-black">Pokemon</h1>
            <div className="border border-black">
                <img className="" src={avatar} alt={name}/>
                <p className="">Nombre: {name}</p>
                <p>N°: {id}</p>
                <div>
                    <h3 className="text-center">Estadisticas</h3>
                    <table className="">
                        <tr>
                            <th className="">HP</th>
                            <th className="">Attack</th>
                            <th className="">Defense</th>
                            <th className="">Special Attack</th>
                            <th className="">Special Defense</th>
                            <th className="">Speed</th>
                        </tr>
                        <tr>
                            <td>{hp}</td>
                            <td>{atk}</td>
                            <td>{def}</td>
                            <td>{spAtk}</td>
                            <td>{spDef}</td>
                            <td>{speed}</td>
                        </tr>
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
                <label htmlFor="pokemonSearch">Buscar Pokemon:</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2"/>
                <input type="button" value="Buscar" onClick={ConsultaPoke} className='bg-sky-50 hover:bg-sky-200 py-1 px-2' />
            </form>
            <Poke name={pokemonNameF} avatar={pokemonImg} id={pokemonId} key={pokemonId} 
            hp={stats0} atk={stats1} def={stats2} spAtk={stats3} spDef={stats4} speed={stats5} />
        </section>
    );
}