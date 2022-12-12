import React,{ useState } from 'react';

import './Control.css';

export default function Control(props) {

    const [contador, setContador] = useState(1);
    const Comp1 = () => {
        setContador(1);
    }

    const Comp2 = () => {
        setContador(2);
    }

    const Comp3 = () => {
        setContador(3);
    }

    const Comp4 = () => {
        setContador(4);
    }
//Control de contenidos con if
    const ControlContenido = () => {//<-- Este renderiza al componente deseado segun el state
        if (contador === 1) {
            return props.component_1;//<-- Componente 1
        } else if (contador === 2) {
            return props.component_2;//<-- Componente 2
        } else if (contador === 3) {
            return props.component_3;//<-- Componente 3
        } else if (contador === 4) {
            return props.component_4;//<-- Componente 4
        }
    }
    return (
        <div id="control">
            <form action="" className="control">
                <input type="radio" name="botones" id="button_1" defaultValue="1" onClick={Comp1} defaultChecked/>
                <label htmlFor="button_1" id="button_one">{props.componentName_1}</label>
                <input type="radio" name="botones" id="button_2" defaultValue="2" onClick={Comp2}/>
                <label htmlFor="button_2" id="button_two">{props.componentName_2}</label>
                <input type="radio" name="botones" id="button_3" defaultValue="3" onClick={Comp3}/>
                <label htmlFor="button_3" id="button_three">{props.componentName_3}</label>
                <input type="radio" name="botones" id="button_4" defaultValue="4" onClick={Comp4}/>
                <label htmlFor="button_4" id="button_four">{props.componentName_4}</label>
            </form>
            {ControlContenido()}
        </div>
    );
}