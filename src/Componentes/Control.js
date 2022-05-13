import './Control.css';

export default function Control(props) {
    return (
        <form action="" className="control">
            <input type="radio" name="botones" id="button_1" defaultValue="1" />
            <label htmlFor="button_1" id="button_one">Calculadora</label>
            <input type="radio" name="botones" id="button_2" defaultValue="2" />
            <label htmlFor="button_2" id="button_two">Calorias</label>
        </form>
    );
}

//logica de los botones

var botonUno = document.getElementById("button_1");
var botonDos = document.getElementById("button_2");

botonUno.onclick = function One() {    
    document.getElementById("calcula").style = "display: flex";
    document.getElementById("item_2").style = "display: none";
}

botonDos.onclick = function Two() {
    document.getElementById("calcula").style = "display: none";
    document.getElementById("item_2").style = "display: flex";
}