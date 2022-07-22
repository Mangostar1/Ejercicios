import React, {useState, useEffect} from 'react';
import 'css/pokeAPI.css';

export default function PokeAPI() {
    const [pokemon, setPokemon] = useState({});
    async function FetchItem() {
        let pokeSearch = document.getElementById('pokemonSearch').value;
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`);
        let pokemon = await data.json();
        console.log(pokemon);
    }
    useEffect(() => {
        FetchItem();
    }, []);

    const Test = () => {
        console.log('Hola');
    }
    return(
        <section className="poke-api">
            <h2>PokeAPI</h2>
            <form className="poke-api-form">
                <label htmlFor="pokemonSearch">Buscar Pokemon</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" defaultValue="pikachu" />
                <input type="button" value="Buscar" onClick={Test} className='' />
            </form>
        </section>
    );
}