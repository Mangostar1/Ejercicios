import './Main.css';
import Control from 'Componentes/handler/Control';
import Calculadora from './Componentes/mini_projects/Calculadora';
import Calorias from './Componentes/mini_projects/Calorias';
import TicTacToe from './Componentes/mini_projects/TicTacToe';
import Paint from './Componentes/mini_projects/Paint';

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