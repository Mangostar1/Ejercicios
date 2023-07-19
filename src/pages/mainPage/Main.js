import "./Main.css";
import Control from "components/handler/Control";
import Calculadora from "./mini_projects/Calculadora";
import Calorias from "./mini_projects/Calorias";
import TicTacToe from "./mini_projects/TicTacToe";
import Paint from "./mini_projects/Paint";

import Footer from "../../components/Footer";
import Snake from "./mini_projects/Snake";

export default function Main() {
  return (
    <>
      <main id="main">
        <Control
          componentName_1="Calculadora"
          componentName_2="Calorias"
          componentName_3="Tic Tac Toe"
          componentName_4="Paint"
          componentName_5="Snake"
          component_1={<Calculadora />}
          component_2={<Calorias />}
          component_3={<TicTacToe />}
          component_4={<Paint />}
          component_5={<Snake />}
        />
      </main>
      <Footer />
    </>
  );
}
