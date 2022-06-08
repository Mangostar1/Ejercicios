import React,{ Component} from 'react'
import './TicTacToe.css'

export default class TicTacToe extends Component {
    
    state = {
        contador: 0,
    }

    circle = () => {
        this.setState(
            {contador: 1}
        );
    }
    
    cross = () => {
        this.setState(
            {contador: 2}
        );
    }

    Celda1 = () => {
        if (this.state.contador === 1) {
            console.log('celda 1 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 1 usa O');
        } else {
            console.log('celda 1 vacia');
        }
    }

    Celda2 = () => {
        if (this.state.contador === 1) {
            console.log('celda 2 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 2 usa O');
        } else {
            console.log('celda 2 vacia');
        }
    }

    Celda3 = () => {
        if (this.state.contador === 1) {
            console.log('celda 3 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 3 usa O');
        } else {
            console.log('celda 3 vacia');
        }
    }

    Celda4 = () => {
        if (this.state.contador === 1) {
            console.log('celda 4 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 4 usa O');
        } else {
            console.log('celda 4 vacia');
        }
    }

    Celda5 = () => {
        if (this.state.contador === 1) {
            console.log('celda 5 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 5 usa O');
        } else {
            console.log('celda 5 vacia');
        }
    }

    Celda6 = () => {
        if (this.state.contador === 1) {
            console.log('celda 6 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 6 usa O');
        } else {
            console.log('celda 6 vacia');
        }
    }

    Celda7 = () => {
        if (this.state.contador === 1) {
            console.log('celda 7 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 7 usa O');
        } else {
            console.log('celda 7 vacia');
        }
    }

    Celda8 = () => {
        if (this.state.contador === 1) {
            console.log('celda 8 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 8 usa O');
        } else {
            console.log('celda 8 vacia');
        }
    }

    Celda9 = () => {
        if (this.state.contador === 1) {
            console.log('celda 9 usa X');
        } else if (this.state.contador === 2) {
            console.log('celda 9 usa O');
        } else {
            console.log('celda 9 vacia');
        }
    }

    IA = () => {
        console.log('programar IA');
    }

    Win = () => {
        console.log('Programar ganador');
    }

    render() {
        return(
            <div>
                <h1>TicTacToe</h1>
                <div className="tictactoe">
                    <h3>Elige una opcion</h3>
                    <form>
                        <label htmlFor="circle">Circulo</label>
                        <input type="radio" name="chose" id="circle" onClick={this.circle} />
                        <label htmlFor="cross">Cruz</label>
                        <input type="radio" name="chose" id="cross" onClick={this.cross} />
                    </form>
                    <div id="tablero">
                        <div id="celda1" className="celdas" onClick={this.Celda1}></div>
                        <div id="celda2" className="celdas" onClick={this.Celda2}></div>
                        <div id="celda3" className="celdas" onClick={this.Celda3}></div>
                        <div id="celda4" className="celdas" onClick={this.Celda4}></div>
                        <div id="celda5" className="celdas" onClick={this.Celda5}></div>
                        <div id="celda6" className="celdas" onClick={this.Celda6}></div>
                        <div id="celda7" className="celdas" onClick={this.Celda7}></div>
                        <div id="celda8" className="celdas" onClick={this.Celda8}></div>
                        <div id="celda9" className="celdas" onClick={this.Celda9}></div>
                    </div>
                </div>
            </div>
        );
    }
}