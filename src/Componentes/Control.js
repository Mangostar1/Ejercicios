import React,{ Component } from 'react';

import './Control.css';
import Calculadora from './Calculadora';
import Calorias from './Calorias';
import TicTacToe from './TicTacToe';

export default class Control extends Component {

    state = {
        contador: 1,
    }
//logica de los botones
    One = (props) => {    
        this.setState(
            {contador: 1}
        );
    }

    Two = (props) => {
        this.setState(
            {contador: 2}
        );
    }

    Three = (props) => {
        this.setState(
            {contador: 3}
        );
    }

    ControlContenido = () => {
        if (this.state.contador === 1) {
            return <Calculadora />;
        } else if (this.state.contador === 2) {
            return <Calorias />;
        } else if (this.state.contador === 3) {
            return <TicTacToe />;
        }
    }
    render() {
        return (
            <div id="control">
                <form action="" className="control">
                    <input type="radio" name="botones" id="button_1" defaultValue="1" onClick={this.One} defaultChecked/>
                    <label htmlFor="button_1" id="button_one">Calculadora</label>
                    <input type="radio" name="botones" id="button_2" defaultValue="2" onClick={this.Two}/>
                    <label htmlFor="button_2" id="button_two">Calorias</label>
                    <input type="radio" name="botones" id="button_3" defaultValue="3" onClick={this.Three}/>
                    <label htmlFor="button_3" id="button_three">Tic Tac Toe</label>
                </form>
                {
                    this.ControlContenido()
                }
            </div>
        );
    }
}