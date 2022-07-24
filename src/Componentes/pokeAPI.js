import React, {useState, useEffect} from 'react';
import 'css/pokeAPI.css';

function Poke({name, avatar, id}) {
    return(
        <>
            <h1>PokeAPI</h1>
        </>
    );
}

export default function PokeAPI() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonNameF, setPokemonNameF] = useState('pikachu');

    async function FetchItem() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameF}`);
        let pokemon = await data.json();
        setPokemons(pokemon);
    }
    useEffect(() => {
        FetchItem();
    }, []);

    const Test = () => {
        setPokemonNameF(document.getElementById('pokemonSearch').value);
        console.log(pokemonNameF, pokemons);
    }// agregar elementos html para mostrar datos del json, la info del pokemon consultado a la api
    return(
        <section className="poke-api">
            <h2>PokeAPI</h2>
            <form className="poke-api-form">
                <label htmlFor="pokemonSearch">Buscar Pokemon</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2"/>
                <input type="button" value="Buscar" onClick={Test} className='bg-sky-50 hover:bg-sky-200 py-1 px-2' />
            </form>
        </section>
    );
}