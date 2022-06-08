let celda1 = document.getElementById('celda1');
let celda2 = document.getElementById('celda2');
let celda3 = document.getElementById('celda3');
let celda4 = document.getElementById('celda4');
let celda5 = document.getElementById('celda5');
let celda6 = document.getElementById('celda6');
let celda7 = document.getElementById('celda7');
let celda8 = document.getElementById('celda8');
let celda9 = document.getElementById('celda9');


let circle = document.getElementById('circle');
let cross = document.getElementById('cross');


celda1.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda1.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda1.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda1.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda1.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda1.classList.add('bloqueado');
    IA();
}

celda2.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda2.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda2.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda2.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda2.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda2.classList.add('bloqueado');
    IA();
}

celda3.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda3.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda3.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda3.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda3.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda3.classList.add('bloqueado');
    IA();
}

celda4.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda4.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda4.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda4.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda4.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda4.classList.add('bloqueado');
    IA();
}

celda5.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda5.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda5.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda5.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda5.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda5.classList.add('bloqueado');
    IA();
}

celda6.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda6.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda6.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda6.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda6.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda6.classList.add('bloqueado');
    IA();
}

celda7.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda7.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda7.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda7.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda7.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda7.classList.add('bloqueado');
    IA();
}

celda8.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda8.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda8.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda8.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda8.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda8.classList.add('bloqueado');
    IA();
}

celda9.onclick = function() {
    if (circle.checked == true) {
        console.log('circulo')
        celda9.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
        celda9.classList.add('circulo');
        ganaste()
    }
    else if(cross.checked == true) {
        console.log('cruz')
        celda9.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
        celda9.classList.add('cruz');
        ganaste()
    } else{
        alert('selecciona una opcion');
    }
    celda9.classList.add('bloqueado');
    IA();
}

function ganaste() {
    if (celda1.classList.contains('circulo') && celda2.classList.contains('circulo') && celda3.classList.contains('circulo') ||
        celda4.classList.contains('circulo') && celda5.classList.contains('circulo') && celda6.classList.contains('circulo') ||
        celda7.classList.contains('circulo') && celda8.classList.contains('circulo') && celda9.classList.contains('circulo') ||
        celda1.classList.contains('circulo') && celda4.classList.contains('circulo') && celda7.classList.contains('circulo') ||
        celda2.classList.contains('circulo') && celda5.classList.contains('circulo') && celda8.classList.contains('circulo') ||
        celda3.classList.contains('circulo') && celda6.classList.contains('circulo') && celda9.classList.contains('circulo') ||
        celda1.classList.contains('circulo') && celda5.classList.contains('circulo') && celda9.classList.contains('circulo') ||
        celda3.classList.contains('circulo') && celda5.classList.contains('circulo') && celda7.classList.contains('circulo')
        ) {
        alert('ganaste circulo');
    } else if (celda1.classList.contains('cruz') && celda2.classList.contains('cruz') && celda3.classList.contains('cruz') ||
        celda4.classList.contains('cruz') && celda5.classList.contains('cruz') && celda6.classList.contains('cruz') ||
        celda7.classList.contains('cruz') && celda8.classList.contains('cruz') && celda9.classList.contains('cruz') ||
        celda1.classList.contains('cruz') && celda4.classList.contains('cruz') && celda7.classList.contains('cruz') ||
        celda2.classList.contains('cruz') && celda5.classList.contains('cruz') && celda8.classList.contains('cruz') ||
        celda3.classList.contains('cruz') && celda6.classList.contains('cruz') && celda9.classList.contains('cruz') ||
        celda1.classList.contains('cruz') && celda5.classList.contains('cruz') && celda9.classList.contains('cruz') ||
        celda3.classList.contains('cruz') && celda5.classList.contains('cruz') && celda7.classList.contains('cruz')
        ) {
        alert('ganaste cruz');
    }
}



function IA() { //cuando la IA agruege una celda, se debe agregar la clase 'bloqueado' para que no pueda ser seleccionada
    if (circle.checked == true) {
        console.log('IA juega cruz');
        if (!celda1.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 1');
            celda1.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda1.classList.add('cruz');
            celda1.classList.add('bloqueado');
        } else if (!celda2.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 2');
            celda2.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda2.classList.add('cruz');
            celda2.classList.add('bloqueado');
        } else if (!celda3.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 3');
            celda3.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda3.classList.add('cruz');
            celda3.classList.add('bloqueado');
        } else if (!celda4.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 4');
            celda4.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda4.classList.add('cruz');
            celda4.classList.add('bloqueado');
        } else if (!celda5.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 5');
            celda5.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda5.classList.add('cruz');
            celda5.classList.add('bloqueado');
        } else if (!celda6.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 6');
            celda6.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda6.classList.add('cruz');
            celda6.classList.add('bloqueado');
        } else if (!celda7.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 7');
            celda7.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda7.classList.add('cruz');
            celda7.classList.add('bloqueado');
        } else if (!celda8.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 8');
            celda8.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda8.classList.add('cruz');
            celda8.classList.add('bloqueado');
        } else if (!celda9.classList.contains('bloqueado')) {
            console.log('IA juega cruz en celda 9');
            celda9.style.cssText = 'background-image: url("../x-lg-svgrepo-com.svg")';
            celda9.classList.add('cruz');
            celda9.classList.add('bloqueado');
        }
    } else {
        console.log('IA juega circulo');
        if (!celda1.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 1');
            celda1.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda1.classList.add('circulo');
            celda1.classList.add('bloqueado');
        } else if (!celda2.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 2');
            celda2.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda2.classList.add('circulo');
            celda2.classList.add('bloqueado');
        } else if (!celda3.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 3');
            celda3.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda3.classList.add('circulo');
            celda3.classList.add('bloqueado');
        } else if (!celda4.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 4');
            celda4.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda4.classList.add('circulo');
            celda4.classList.add('bloqueado');
        } else if (!celda5.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 5');
            celda5.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda5.classList.add('circulo');
            celda5.classList.add('bloqueado');
        } else if (!celda6.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 6');
            celda6.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda6.classList.add('circulo');
            celda6.classList.add('bloqueado');
        } else if (!celda7.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 7');
            celda7.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda7.classList.add('circulo');
            celda7.classList.add('bloqueado');
        } else if (!celda8.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 8');
            celda8.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda8.classList.add('circulo');
            celda8.classList.add('bloqueado');
        } else if (!celda9.classList.contains('bloqueado')) {
            console.log('IA juega circulo en celda 9');
            celda9.style.cssText = 'background-image: url("../circle-svgrepo-com.svg")';
            celda9.classList.add('circulo');
            celda9.classList.add('bloqueado');
        }
    }
}