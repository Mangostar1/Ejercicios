import './Calorias.css';

export default function Calorias(){
    return(
        <div id="item_2">
            <form action="" name="calorias" className="calorias">
                            
            <label for="genero" id="genero-label">Selecciona tu sexo de nacimiento:</label>
                <select name="genero" id="genero">
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                </select>
                            
                <label for="peso" className="label-number">Pon tu peso</label>
                <input type="number" name="" id="peso" min="20" value="" max="150" placeholder="61 kg" />

                <label for="altura" className="label-number">Pon tu altura</label>
                <input type="number" name="" id="altura" value="" min="100" max="220" placeholder="174 cm" />

                <label for="edad" className="label-number">Pon tu edad</label>
                <input type="number" name="" id="edad" value="" min="1" max="99" placeholder="27" />
                            
                <input type="radio" name="actividadFisic" id="actividad_1" />
                <label for="actividad_1" className="label_actividad">No hago ejercicios</label>
                        
                <input type="radio" name="actividadFisic" id="actividad_2" />
                <label for="actividad_2" className="label_actividad">Me ejercito entre 1 y 3 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_3" />
                <label for="actividad_3" className="label_actividad">Me ejercito entre 3 y 5 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_4" />
                <label for="actividad_4" className="label_actividad">Me ejercito entre 6 y 7 veces por semana</label>
                            
                <input type="radio" name="actividadFisic" id="actividad_5" />
                <label for="actividad_5" className="label_actividad">Entreno de manera intensa 2 veces al dia</label>

                <input type="button" value="Enviar" id="enviar" />
                <input type="text" name="resulta" id="resulta" value="" readonly />
                <input type="reset" value="Borrar" id="reset" />
            </form>
        </div>
    );
}