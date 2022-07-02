import React,{ useState} from 'react'
import './Paint.css'

export default function Paint(){

    const [use, setUse] = useState(0); //0 nada, 1 lapiz, 2 goma

    let draw = false
    let initX;
    let initY;

    const dibujar = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let pencils = document.querySelector('input[name="pencilControl"]');
        if (pencils.checked === true) {
            canvas.onmousedown = (e) => {
                draw = true
                initX = e.offsetX;
                initY = e.offsetY;
                drawing(initX, initY);
                canvas.onmousemove = (e) => {
                    drawing(e.offsetX, e.offsetY);
                }
            }
            
            function drawing(mouseX, mouseY) {
                if (draw === true) {
                    ctx.beginPath();
                    ctx.moveTo(initX, initY);
                    ctx.strokeStyle = document.querySelector('#color').value;
                    ctx.lineWidth = document.querySelector('#ancho').value;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                    initX = mouseX;
                    initY = mouseY;
                }
            }
            canvas.onmouseup = () => {
                draw = false;
            }
        } else {
            canvas.onmousedown = null;
            canvas.onmousemove = null;
            canvas.onmouseup = null;
            goma();
        }
    }

    const eraseEverything = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    //herramientas
    function goma() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.onmousedown = (e) => {
            draw = true;
            initX = e.offsetX;
            initY = e.offsetY;
            Eraser(initX, initY);
            canvas.onmousemove = (e) => {
                Eraser(e.offsetX, e.offsetY);
            }
        }
        function Eraser(mouseX, mouseY) {
            ctx.clearRect(mouseX, mouseY, document.querySelector('#ancho').value, document.querySelector('#ancho').value);
        }
        canvas.onmouseup = () => {
            draw = false;
        }
    }

        return(
            <section id="paint">
                <canvas width="500" height="500" id="canvas"></canvas>
                <div id="botones">
                    <input type="color" id="color"/>
                    <input type="range" min="1" max="30" defaultValue="1" id="ancho" />
                    <input type="button" defaultValue="Borrar Todo" id="erase" onClick={eraseEverything}/>
                    <div id="pencils">
                        <input type="radio" name="pencilControl" id="lapiz" onClick={dibujar} />
                        <label htmlFor="lapiz" id="lb-pencil"></label>
                        <input type="radio" name="pencilControl" id="goma" onClick={dibujar}  />
                        <label htmlFor="goma" id="lb-erase"></label>
                    </div>
                </div>
            </section>
        );
}