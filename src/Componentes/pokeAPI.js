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
                    <table>
                        <tr>
                            <th>HP</th>
                            <th>Attack</th>
                            <th>Defense</th>
                            <th>Special Attack</th>
                            <th>Special Defense</th>
                            <th>Speed</th>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
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
    const [stats, setStats] = useState([]);

    async function FetchItem() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameF}`);
        let pokemon = await data.json();
        setPokemons(pokemon);
        setPokemonImg(pokemon.sprites.front_default);
        setPokemonId(pokemon.id);
        setStats(pokemon.stats);
    }
    useEffect(() => {
        FetchItem();
    });

    const ConsultaPoke = () => {
        setPokemonNameF(document.getElementById('pokemonSearch').value);
        console.log(stats[1].base_stat);
    }
    return(
        <section className="">
            <h2 className="font-black text-xl">PokeAPI</h2>
            <form className="">
                <label htmlFor="pokemonSearch">Buscar Pokemon:</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2"/>
                <input type="button" value="Buscar" onClick={ConsultaPoke} className='bg-sky-50 hover:bg-sky-200 py-1 px-2' />
            </form>
            <Poke name={pokemonNameF} avatar={pokemonImg} id={pokemonId} />
        </section>
    );
}