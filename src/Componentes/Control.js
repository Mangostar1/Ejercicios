import React,{ Component } from 'react';

import './Control.css';
import Calculadora from './Calculadora';
import Calorias from './Calorias';
import TicTacToe from './TicTacToe';
import Paint from './Paint';

export default class Control extends Component {

    state = {
        contador: 1,
    }
//logica de los botones
    Calc = (props) => {    
        this.setState(
            {contador: 1}
        );
    }

    Cal = (props) => {
        this.setState(
            {contador: 2}
        );
    }

    TicTac = (props) => {
        this.setState(
            {contador: 3}
        );
    }

    Paint = (props) => {
        this.setState(
            {contador: 4}
        )
    }
//Control de contenidos con if
    ControlContenido = () => {
        if (this.state.contador === 1) {
            return <Calculadora />;
        } else if (this.state.contador === 2) {
            return <Calorias />;
        } else if (this.state.contador === 3) {
            return <TicTacToe />;
        } else if (this.state.contador === 4) {
            return <Paint />;
        }
    }
    render() {
        return (
            <div id="control">
                <form action="" className="control">
                    <input type="radio" name="botones" id="button_1" defaultValue="1" onClick={this.Calc} defaultChecked/>
                    <label htmlFor="button_1" id="button_one">Calculadora</label>
                    <input type="radio" name="botones" id="button_2" defaultValue="2" onClick={this.Cal}/>
                    <label htmlFor="button_2" id="button_two">Calorias</label>
                    <input type="radio" name="botones" id="button_3" defaultValue="3" onClick={this.TicTac}/>
                    <label htmlFor="button_3" id="button_three">Tic Tac Toe</label>
                    <input type="radio" name="botones" id="button_4" defaultValue="4" onClick={this.Paint}/>
                    <label htmlFor="button_4" id="button_four">Paint</label>
                </form>
                {this.ControlContenido()}
            </div>
        );
    }
}