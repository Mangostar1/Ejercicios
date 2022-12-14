import React from 'react';

import PokeAPI from "pages/apisPage/API_projects/pokeAPI";
import './APIs.css';

import Footer from "../../components/Footer";

export default function APIs() {
    return(
        <>
            <main id="main-api">
                <PokeAPI />
            </main>
            <Footer />
        </>
    );
}