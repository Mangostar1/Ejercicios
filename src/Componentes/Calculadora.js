import './Calculadora.css';

export default function Calculadora(){
    //logica de la calculadora
    function nine(){
        document.calculadora.resultado.value += 9;
    }

    function eight(){
        document.calculadora.resultado.value += 8;
    }

    function seven(){
        document.calculadora.resultado.value += 7;
    }

    function six(){
        document.calculadora.resultado.value += 6;
    }

    function five(){
        document.calculadora.resultado.value += 5;
    }

    function four(){
        document.calculadora.resultado.value += 4;
    }

    function three(){
        document.calculadora.resultado.value += 3;
    }

    function two(){
        document.calculadora.resultado.value += 2;
    }

    function one(){
        document.calculadora.resultado.value += 1;
    }

    function zero(){
        document.calculadora.resultado.value += 0;
    }

    function sum(){
        document.calculadora.resultado.value += "+";
    }

    function rest(){
        document.calculadora.resultado.value += "-";
    }

    function mult(){
        document.calculadora.resultado.value += "*";
    }

    function div(){
        document.calculadora.resultado.value += "/";
    }

    function dot(){
        document.calculadora.resultado.value += ".";
    }

    function result(){
        if (document.calculadora.resultado.value === " ") {
        } else {
            document.calculadora.resultado.value = eval(document.calculadora.resultado.value);
        }
    }

    return(
        <div id="calcula">
            <form action="" name="calculadora">
                <input type="textfield" name="resultado" defaultValue="" id="resultados" readOnly />

                <input type="button" defaultValue="7" id="7" className="buttons" onClick={seven}/> {/* en html es value, en JSX es defaultValue */}
                <input type="button" defaultValue="8" id="8" className="buttons" onClick={eight}/>
                <input type="button" defaultValue="9" id="9" className="buttons" onClick={nine}/>
                <input type="button" defaultValue="/" id="divicion" className="buttons" onClick={div}/>
                            
                <input type="button" defaultValue="4" id="4" className="buttons" onClick={four}/>
                <input type="button" defaultValue="5" id="5" className="buttons" onClick={five}/>
                <input type="button" defaultValue="6" id="6" className="buttons" onClick={six}/>
                <input type="button" defaultValue="x" id="multiplicacion" className="buttons" onClick={mult}/>
                            
                <input type="button" defaultValue="1" id="1" className="buttons" onClick={one}/>
                <input type="button" defaultValue="2" id="2" className="buttons" onClick={two}/>
                <input type="button" defaultValue="3" id="3" className="buttons" onClick={three}/>
                <input type="button" defaultValue="-" id="resta" className="buttons" onClick={rest}/>
                            
                <input type="button" defaultValue="." id="coma" className="buttons" onClick={dot}/>
                <input type="button" defaultValue="0" id="0" className="buttons" onClick={zero}/>
                <input type="button" defaultValue="+" id="suma" className="buttons" onClick={sum}/>

                <input type="reset" defaultValue="C" className="buttons" />
                <input type="button" defaultValue="=" id="igual" className="buttons" onClick={result}/>                            
            </form>
        </div>
    );
}