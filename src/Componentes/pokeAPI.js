import React, {useState, useEffect} from 'react';
import 'css/pokeAPI.css';

function Poke({name, avatar, id}) {
    return(
        <div>
            <h1>Pokemo</h1>
            <div className="border border-black">
                <img className="" src={avatar} alt={name}/>
                <h2 className="font-black">{name}</h2>
            </div>
        </div>
    );
}

export default function PokeAPI() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonNameF, setPokemonNameF] = useState('pikachu');
    const [pokemonImg, setPokemonImg] = useState('');

    async function FetchItem() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameF}`);
        let pokemon = await data.json();
        setPokemons(pokemon);
        setPokemonImg(pokemon.sprites.front_default);
    }
    useEffect(() => {
        FetchItem();
    });

    const Test = () => {
        setPokemonNameF(document.getElementById('pokemonSearch').value);
    }
    return(
        <section className="poke-api">
            <h2>PokeAPI</h2>
            <form className="poke-api-form">
                <label htmlFor="pokemonSearch">Buscar Pokemon</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2"/>
                <input type="button" value="Buscar" onClick={Test} className='bg-sky-50 hover:bg-sky-200 py-1 px-2' />
            </form>
            <Poke name={pokemonNameF} avatar={pokemonImg} id='id' />
        </section>
    );
}