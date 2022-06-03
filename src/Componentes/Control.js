import React,{ Component } from 'react';

import './Control.css';
import Calculadora from './Calculadora';
import Calorias from './Calorias';

export default class Control extends Component {

    state = {
        contador: 1,
    }
//logica de los botones
    One = (props) => {    
        console.log('One');
        this.setState(
            {contador: 1}
        );
    }

    Two = (props) => {
        console.log('Two');
        this.setState(
            {contador: 2}
        );
    }
    render() {
        return (
            <div id="control">
                <form action="" className="control">
                    <input type="radio" name="botones" id="button_1" defaultValue="1" onClick={this.One} defaultChecked/>
                    <label htmlFor="button_1" id="button_one">Calculadora</label>
                    <input type="radio" name="botones" id="button_2" defaultValue="2" onClick={this.Two}/>
                    <label htmlFor="button_2" id="button_two">Calorias</label>
                </form>
                {
                    this.state.contador === 1 ? <Calculadora /> : <Calorias />
                }
            </div>
        );
    }
}