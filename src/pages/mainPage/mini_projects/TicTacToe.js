import React, { Component, useState, useId, useRef } from 'react'

import crossImg from 'assets/img/x-lg-svgrepo-com.svg';
import circleImg from 'assets/img/circle-svgrepo-com.svg';
import './TicTacToe.css';


export default function TicTacToe() {
    
    /* States */
    const [win, setWin] = useState(0);//<-- Para saber quien de los dos jugadores gano
    const [play_IA, setPlayIA] = useState(false);//<-- Usado para saber si se jugara en contra de la IA o no
    const [turn, setTurn] = useState(0);//<-- Para saber de quien es el turno actualmente
    const [playerOne, setPlayerOne] = useState('');//<-- Util para saber si el jugador 1 usara cruz o circulo
    const [cells, setCells] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    /* IDs */
    const cell_1 = useId();
    const cell_2 = useId();
    const cell_3 = useId();
    const cell_4 = useId();
    const cell_5 = useId();
    const cell_6 = useId();
    const cell_7 = useId();
    const cell_8 = useId();
    const cell_9 = useId();

    /* Functions */

    const circle = () => {//<-- If player one choose circle
        const crossLabel = document.getElementById('crossLabel');
        crossLabel.style.cssText = `background-color: #f0f0f0; color: black; padding: 5px 5px 5px 5px;`;
        
        window.getComputedStyle(crossLabel, '::after');
        crossLabel.style.setProperty('--displayChangeCro', 'none');
        
        //se cambian estilos al otro input radio
        const circleLabel = document.getElementById('circleLabel');
        circleLabel.style.cssText = `background-color: tomato; color: white; padding: 5px 5px 5px 25px;`;
        
        window.getComputedStyle(circleLabel, '::after');
        circleLabel.style.setProperty('--displayChangeCir', 'inline-block');

        setPlayerOne('circle');
    }

    const cross = () => {//<-- If player one choose cross
        const circleLabel = document.getElementById('circleLabel');
        circleLabel.style.cssText = `background-color: #f0f0f0; color: black; padding: 5px 5px 5px 5px;`;
        
        window.getComputedStyle(circleLabel, '::after');
        circleLabel.style.setProperty('--displayChangeCir', 'none');
        
        //se cambian estilos al otro input radio
        const crossLabel = document.getElementById('crossLabel');
        crossLabel.style.cssText = `background-color: tomato; color: white; padding: 5px 5px 5px 25px;`;
        
        window.getComputedStyle(crossLabel, '::after');
        crossLabel.style.setProperty('--displayChangeCro', 'inline-block');

        setPlayerOne('cross');
    }


    const Celda1 = () => {

        if (playerOne === 'cross') {
            document.querySelector('.cell_1').style.cssText = `background-image: url("${crossImg}");`;
        }
        if (playerOne === 'circle') {
            document.querySelector('.cell_1').style.cssText = `background-image: url("${circleImg}");`;
        }

        if (playerOne === '') {
            Alert();
        }
    }

    const handleCells = ({target}) => {
        
        if (target.id === cell_1) {
            console.log('seleccionaste la selda 1');
            Celda1();
        }

        if (target.id === cell_2) {
            console.log('seleccionaste la selda 2')
        }

        if (target.id === cell_3) {
            console.log('seleccionaste la selda 3')
        }

        if (target.id === cell_4) {
            console.log('seleccionaste la selda 4')
        }

        if (target.id === cell_5) {
            console.log('seleccionaste la selda 5')
        }

        if (target.id === cell_6) {
            console.log('seleccionaste la selda 6')
        }

        if (target.id === cell_7) {
            console.log('seleccionaste la selda 7')
        }

        if (target.id === cell_8) {
            console.log('seleccionaste la selda 8')
        }

        if (target.id === cell_9) {
            console.log('seleccionaste la selda 9')
        }
    }

    const Alert = () => {
        alert('Selecciona una opcion entre X y O por favor');
    }

    return(
        <div>
                <h1>TicTacToe</h1>
                <div className="tictactoe">
                    <h3>Elige una opcion</h3>
                    <form id='selectChoise'>
                        <input type="radio" name="chose" id="circle" onClick={circle} />
                        <label htmlFor="circle" id="circleLabel">Circulo</label>
                        <input type="radio" name="chose" id="cross" onClick={cross} />
                        <label htmlFor="cross" id="crossLabel">Cruz</label>
                    </form>
                    <form id='vsChose'>
                        <label htmlFor="ia">Vs IA</label>
                        <input type="radio" name="chose" id="ia" />
                        <label htmlFor="player">Vs Player</label>
                        <input type="radio" name="chose" id="player" />
                    </form>
                    <div id="tablero">
                        <div id={cell_1} className="cells cell_1" onClick={handleCells}></div>
                        <div id={cell_2} className="cells cell_2" onClick={handleCells}></div>
                        <div id={cell_3} className="cells cell_3" onClick={handleCells}></div>
                        <div id={cell_4} className="cells cell_4" onClick={handleCells}></div>
                        <div id={cell_5} className="cells cell_5" onClick={handleCells}></div>
                        <div id={cell_6} className="cells cell_6" onClick={handleCells}></div>
                        <div id={cell_7} className="cells cell_7" onClick={handleCells}></div>
                        <div id={cell_8} className="cells cell_8" onClick={handleCells}></div>
                        <div id={cell_9} className="cells cell_9" onClick={handleCells}></div>
                    </div>
                </div>
            </div>
    )
}