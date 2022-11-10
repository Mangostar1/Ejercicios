import React from 'react';

export default function Poke({name, avatar, id, hp, atk, def, spAtk, spDef, speed, weight, height, type, basePokemon, evolution, lastEvolution, basePokemonImg, evolutionImg, lastEvolutionImg}) {
    return(
        <div className='flex-col'>
            <div className="">
                <div className="flex items-center">
                    {/* <button className="bg-red-400 py-1 px-2 rounded-lg hover:bg-red-600 ease-in-out duration-300">prev</button> */}
                    <img className="w-40 m-auto" src={avatar} alt={name}/>
                    {/* <button className="bg-red-400 py-1 px-2 rounded-lg hover:bg-red-600 ease-in-out duration-300">next</button> */}
                </div>
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
                                <th className="px-2 border border-black bg-slate-300">Ataque</th>
                                <th className="px-2 border border-black bg-slate-300">Defensa</th>
                                <th className="px-2 border border-black bg-slate-300">Ataque Especial</th>
                                <th className="px-2 border border-black bg-slate-300">Defensa Especial</th>
                                <th className="px-2 border border-black bg-slate-300">Velocidad</th>
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