import React,{ Component} from 'react'
import cross from "../img/x-lg-svgrepo-com.svg";
import circle from "../img/circle-svgrepo-com.svg";
import './TicTacToe.css'

export default class TicTacToe extends Component {
    
    state = {
        ps1Play: 0,
        turno: '',
        celda1: '',
        celda2: '',
        celda3: '',
        celda4: '',
        celda5: '',
        celda6: '',
        celda7: '',
        celda8: '',
        celda9: '',
        ganador: '',
        jugador: 0,
        ia: 0,
        iaPlay: '',
    }

    circle = () => {
        this.setState(
            {ps1Play: 2, iaPlay: 'cross'}
        );
    }
    
    cross = () => {
        this.setState(
            {ps1Play: 1, iaPlay: 'circle'}
        );
    }

    VsIa = () => {
        this.setState(
            {ia: 1, jugador: 0}
        )
    }

    VsPlayer = () => {
        this.setState(
            {jugador: 1, ia: 0}
        )
    }

    Celda1 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 1 usa X');
            this.setState({
                celda1: 'X',
                turno: 'X',
            });
            document.getElementById('celda1').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 1 usa O');
            this.setState({
                celda1: 'O',
                turno: 'O',
            });
            document.getElementById('celda1').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 1 vacia, selecciona una opcion');
        }
    }

    Celda2 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 2 usa X');
            this.setState({
                celda2: 'X',
                turno: 'X',
            });
            document.getElementById('celda2').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 2 usa O');
            this.setState({
                celda2: 'O',
                turno: 'O',
            });
            document.getElementById('celda2').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 2 vacia, selecciona una opcion');
        }
    }

    Celda3 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 3 usa X');
            this.setState({
                celda3: 'X',
                turno: 'X',
            });
            document.getElementById('celda3').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 3 usa O');
            this.setState({
                celda3: 'O',
                turno: 'O',
            });
            document.getElementById('celda3').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 3 vacia, selecciona una opcion');
        }
    }

    Celda4 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 4 usa X');
            this.setState({
                celda4: 'X',
                turno: 'X',
            });
            document.getElementById('celda4').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 4 usa O');
            this.setState({
                celda4: 'O',
                turno: 'O',
            });
            document.getElementById('celda4').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 4 vacia, selecciona una opcion');
        }
    }

    Celda5 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 5 usa X');
            this.setState({
                celda5: 'X',
                turno: 'X',
            });
            document.getElementById('celda5').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 5 usa O');
            this.setState({
                celda5: 'O',
                turno: 'O',
            });
            document.getElementById('celda5').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 5 vacia, selecciona una opcion');
        }
    }

    Celda6 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 6 usa X');
            this.setState({
                celda6: 'X',
                turno: 'X',
            });
            document.getElementById('celda6').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 6 usa O');
            this.setState({
                celda6: 'O',
                turno: 'O',
            });
            document.getElementById('celda6').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 6 vacia, selecciona una opcion');
        }
    }

    Celda7 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 7 usa X');
            this.setState({
                celda7: 'X',
                turno: 'X',
            });
            document.getElementById('celda7').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 7 usa O');
            this.setState({
                celda7: 'O',
                turno: 'O',
            });
            document.getElementById('celda7').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 7 vacia, selecciona una opcion');
        }
    }

    Celda8 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 8 usa X');
            this.setState({
                celda8: 'X',
                turno: 'X',
            });
            document.getElementById('celda8').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 8 usa O');
            this.setState({
                celda8: 'O',
                turno: 'O',
            });
            document.getElementById('celda8').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 8 vacia, selecciona una opcion');
        }
    }

    Celda9 = () => {
        if (this.state.ps1Play === 1) {
            console.log('celda 9 usa X');
            this.setState({
                celda9: 'X',
                turno: 'X',
            });
            document.getElementById('celda9').style.cssText = `background-image: url("${cross}");`;
            this.IA();
        
        } else if (this.state.ps1Play === 2) {
            console.log('celda 9 usa O');
            this.setState({
                celda9: 'O',
                turno: 'O',
            });
            document.getElementById('celda9').style.cssText = `background-image: url("${circle}");`;
            this.IA();
        
        } else {
            console.log('celda 9 vacia, selecciona una opcion');
        }
    }

    IA = () => {
        if (this.state.ia === 1) {
            console.log('IA seleccionada como jugador contrario, IA hace algo');
        }
    }

    Player2 = () => {
        console.log('programar Player2');
    }

    Reiniciar = () => {
        console.log('reiniciar');
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
                    <form>
                        <label htmlFor="ia">Vs IA</label>
                        <input type="radio" name="chose" id="ia" onClick={this.VsIa} />
                        <label htmlFor="player">Vs Player</label>
                        <input type="radio" name="chose" id="player" onClick={this.VsPlayer}/>
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