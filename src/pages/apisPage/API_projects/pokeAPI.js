import React, {useState, useEffect} from 'react';
import Poke from "./poke";
// poner un boton que lleve al siguente pokemon en la pokedex | Botones ya en el DOM, falta plantear la logica de los botones

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
                console.error(`${err} %cEl pokemon que has buscado no existe`, 'color: red; background-color: #eff6ff; font-size: 15px; border: 1px solid black; padding: 5px 10px');
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

    const clear = () => {
        document.getElementById('pokemonSearch').value = "";
    }

    return(
        <section className="">
            <h2 className="font-black text-xl text-center hover:text-amber-300">PokeAPI</h2>
            <form className="relative">
                <label className="px-2" htmlFor="pokemonSearch">Buscar Pokemon:</label>
                <input type="text" id="pokemonSearch" placeholder="Pokemon" className="py-1 px-2 bg-gray-100"/>
                <input type="button" value="X" onClick={clear} className="font-bold text-black -ml-4 mr-2 z-30 hover:text-red-400" />
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