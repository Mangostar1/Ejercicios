import React, { useState, useId, useEffect } from 'react';

import crossImg from 'assets/img/x-lg-svgrepo-com.svg';
import circleImg from 'assets/img/circle-svgrepo-com.svg';
import './TicTacToe.css';


export default function TicTacToe() {
    
    /* States */
    const [win, setWin] = useState('');//<-- Para saber quien de los dos jugadores gano
    const [play_IA, setPlayIA] = useState(true);//<-- Usado para saber si se jugara en contra de la IA o no
    const [turn, setTurn] = useState(0);//<-- Para saber de quien es el turno actualmente
    const [playerOne, setPlayerOne] = useState('');//<-- Util para saber si el jugador 1 usara cruz o circulo
    const [playerTwo, setPlayerTwo] = useState('');//<-- Util para saber si el jugador 1 usara cruz o circulo
    const [cells, setCells] = useState(['', '','', '','', '','', '', '']);

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
    const vsPlayer = useId();
    const vsIA = useId();

    /* Functions */

    const circle = () => {//<-- If player one choose circle
        const crossLabel = document.getElementById('crossLabel');
        crossLabel.style.cssText = `background-color: #f0f0f0; color: black; padding: 5px 5px 5px 5px;`;
        
        window.getComputedStyle(crossLabel, '::after');
        crossLabel.style.setProperty('--displayChangeCro', 'none');
        
        //Add style on circle label
        const circleLabel = document.getElementById('circleLabel');
        circleLabel.style.cssText = `background-color: tomato; color: white; padding: 5px 5px 5px 25px;`;
        
        window.getComputedStyle(circleLabel, '::after');
        circleLabel.style.setProperty('--displayChangeCir', 'inline-block');

        setPlayerOne('circle');
        setPlayerTwo('cross');
    }

    const cross = () => {//<-- If player one choose cross
        const circleLabel = document.getElementById('circleLabel');
        circleLabel.style.cssText = `background-color: #f0f0f0; color: black; padding: 5px 5px 5px 5px;`;
        
        window.getComputedStyle(circleLabel, '::after');
        circleLabel.style.setProperty('--displayChangeCir', 'none');
        
        //Add style on cross label
        const crossLabel = document.getElementById('crossLabel');
        crossLabel.style.cssText = `background-color: tomato; color: white; padding: 5px 5px 5px 25px;`;
        
        window.getComputedStyle(crossLabel, '::after');
        crossLabel.style.setProperty('--displayChangeCro', 'inline-block');

        setPlayerOne('cross');
        setPlayerTwo('circle');
    }

    const handleChose = ({target}) => {
    
        if (target.id === vsPlayer) {
            setPlayIA(false);
        }

        if (target.id === vsIA) {
            setPlayIA(true);
        }

    }


    const Alert = () => {
        alert('Selecciona una opcion entre X y O por favor');
    }


    const cellsBackgroundImage = (arrNum, numTurn, player) => {
        if (player === 'cross') {
            document.querySelector(`.cell_${arrNum}`).style.cssText = `background-image: url("${crossImg}");`;
            const newCells = [...cells];
            newCells.splice(arrNum - 1, 1 ,'x');
            setCells(newCells);
            setTurn(numTurn);
        }
        if (player === 'circle') {
            document.querySelector(`.cell_${arrNum}`).style.cssText = `background-image: url("${circleImg}");`;
            const newCells = [...cells];
            newCells.splice(arrNum - 1, 1 ,'o');
            setCells(newCells);
            setTurn(numTurn);
        }

        if (player === '') {
            Alert();
        }
    }

    const idCells = [cell_1, cell_2, cell_3, cell_4, cell_5, cell_6, cell_7, cell_8, cell_9];

    const handleCells = ({target}) => {
        if (!play_IA) {
            for (let i = 0; i < idCells.length; i++) {
                if (target.id === idCells[i] && turn === 0) {
                    cellsBackgroundImage(i + 1, 1, playerOne);//<-- It add to the box or cell the user option (it can be cross or circle)
                }
    
                if (target.id === idCells[i] && turn === 1) {
                    cellsBackgroundImage(i + 1, 0, playerTwo);
                }
            }
        }

        if (play_IA) {
            //code
        }
    }

    function checkWinner(cells, player) {
        const winningCombos = [    [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [0, 3, 6],
            [6, 4, 2],
            [2, 5, 8],
            [1, 4, 7]
        ];
    
        return winningCombos.some(combo => {
            return combo.every(index => cells[index] === player);
        });
    }
    
    useEffect(() => {
        if (checkWinner(cells, 'x')) {
            setWin('Cross');
            alert(`El ganador es X`)
        } else if (checkWinner(cells, 'o')) {
            setWin('Circle');
            alert(`El ganador es O`)
        }
    }, [cells, win]);

    return(
        <div>
                <h1 className='text-center'>TicTacToe</h1>
                <div className="tictactoe">
                    <h3>Elige una opcion:</h3>
                    <form id='selectChoise'>
                        <input type="radio" name="chose" id="circle" onClick={circle} />
                        <label htmlFor="circle" id="circleLabel">Circulo</label>
                        <input type="radio" name="chose" id="cross" onClick={cross} />
                        <label htmlFor="cross" id="crossLabel">Cruz</label>
                    </form>
                    <h3>Elige contra quien jugar:</h3>
                    <form id='vsChose'>
                        <input type="radio" name="chose" id={vsIA} onClick={handleChose} defaultChecked className="inputIA vsRadio"/>
                        <label htmlFor={vsIA} className="vsIA">Vs IA</label>
                        <input type="radio" name="chose" id={vsPlayer} onClick={handleChose} className="inputPlayer vsRadio" />
                        <label htmlFor={vsPlayer} className="vsPlayer">Vs Player</label>
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