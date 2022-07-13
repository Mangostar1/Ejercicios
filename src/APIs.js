import React,{useState} from 'react';

import PokeAPI from "Componentes/pokeAPI";
import './APIs.css';

export default function APIs() {
    return(
        <main id="main">
            <h1 id="title-main">APIs</h1>
            <PokeAPI />
        </main>
    );
}