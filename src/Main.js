import './Main.css';
import Control from 'Componentes/Control';
import Calculadora from './Componentes/Calculadora';
import Calorias from './Componentes/Calorias';
import TicTacToe from './Componentes/TicTacToe';
import Paint from './Componentes/Paint';

export default function Main() {
    return (
        <main id="main">
            <Control 
                componentName_1="Calculadora" componentName_2="Calorias" componentName_3="Tic Tac Toe" componentName_4="Paint" 
                component_1={<Calculadora />} component_2={<Calorias />} component_3={<TicTacToe />} component_4={<Paint />}
            />
        </main>
    );
}