import './Calorias.css';

export default function Calorias(){

    //logica de la calculadora de calorias
function calculo() {
    let respuesta = document.getElementById("resulta");
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero");
    let hombre = 66+(13.7*peso)+(5*altura)-(6.5*edad);
    let mujer = 655+(9.6*peso)+(1.8*altura)-(4.7*edad);

    if (genero.value == 1) {

        if (document.getElementById("actividad_1").checked) {
            hombre *= 1.2;
        } else if (document.getElementById("actividad_2").checked) {
            hombre *= 1.375;
        } else if (document.getElementById("actividad_3").checked) {
            hombre *= 1.55;
        } else if (document.getElementById("actividad_4").checked) {
            hombre *= 1.725;
        } else {
            hombre *= 1.9;
        }
        respuesta.value = hombre;
        
    } else {

        if (document.getElementById("actividad_1").checked) {
            mujer *= 1.2;
        } else if (document.getElementById("actividad_2").checked) {
            mujer *= 1.375;
        } else if (document.getElementById("actividad_3").checked) {
            mujer *= 1.55;
        } else if (document.getElementById("actividad_4").checked) {
            mujer *= 1.725;
        } else {
            mujer *= 1.9;
        }
        respuesta.value = mujer;
    }
}

    return(
        <div id="item_2">
            <form action="" name="calorias" className="calorias">
                            
            <label htmlFor="genero" id="genero-label">Selecciona tu sexo de nacimiento:</label>
                <select name="genero" id="genero">
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                </select>
                            
                <label htmlFor="peso" className="label-number">Pon tu peso</label>
                <input type="number" name="" id="peso" min="20" defaultValue="" max="150" placeholder="61 kg" />

                <label htmlFor="altura" className="label-number">Pon tu altura</label>
                <input type="number" name="" id="altura" defaultValue="" min="100" max="220" placeholder="174 cm" />

                <label htmlFor="edad" className="label-number">Pon tu edad</label>
                <input type="number" name="" id="edad" defaultValue="" min="1" max="99" placeholder="27" />
                            
                <input type="radio" name="actividadFisic" id="actividad_1" />
                <label htmlFor="actividad_1" className="label_actividad">No hago ejercicios</label>
                        
                <input type="radio" name="actividadFisic" id="actividad_2" />
                <label htmlFor="actividad_2" className="label_actividad">Me ejercito entre 1 y 3 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_3" />
                <label htmlFor="actividad_3" className="label_actividad">Me ejercito entre 3 y 5 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_4" />
                <label htmlFor="actividad_4" className="label_actividad">Me ejercito entre 6 y 7 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_5" />
                <label htmlFor="actividad_5" className="label_actividad">Entreno de manera intensa 2 veces al dia</label>

                <input type="button" defaultValue="Enviar" id="enviar" onClick={calculo}/>
                <input type="text" name="resulta" id="resulta" defaultValue="" readOnly /> {/* readonly de html en JSX es readOnly */}
                <input type="reset" defaultValue="Borrar" id="reset" />
            </form>
        </div>
    );
}