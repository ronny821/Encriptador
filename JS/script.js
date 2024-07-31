function mostrarElemento() {
    const elementos = document.getElementsByClassName('campo-descifrar');
    const mensaje = document.getElementsByClassName('campo-mensaje');
    const input = document.getElementById('inputText');

    const displayValue = input.value.trim() === '' ? 'none' : 'flex';
    const mensajeDisplayValue = input.value.trim() === '' ? 'flex' : 'none';

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = displayValue;
    }

    for (let i = 0; i < mensaje.length; i++) {
        mensaje[i].style.display = mensajeDisplayValue;
    }
}

function encriptar() {

    let texto = document.getElementById('inputText').value;
    let textoEncriptado = texto.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    // Verificar si el textarea ya existe antes de asignar el valor
    let outputTextarea = document.getElementById('outputText');
    if (outputTextarea) {
        outputTextarea.value = textoEncriptado;
    }
}

function copiar() {
    let outputTextarea = document.getElementById('outputText');
    if (outputTextarea) {
        outputTextarea.select();
        document.execCommand('copy');
    }
}

function guardar() {
    let textoE = document.getElementById('inputText').value;
    let textoD = document.getElementById('outputText').value;
    const mensaje = document.getElementById('mensaje');

    // Crear un identificador único con solo la fecha actual
    const currentDate = new Date().toLocaleDateString().replace(/\//g, '-');
    const uniqueId = 'id_' + currentDate + '_' + new Date().getTime();

    // Crear un nuevo botón
    const nuevoBoton = document.createElement('button');
    nuevoBoton.innerText = 'Mostrar ' + currentDate;

    // Añadir el evento onclick al botón
    nuevoBoton.onclick = function() {
        // Obtener los valores de localStorage usando el identificador único
        const textoEncriptado = localStorage.getItem(uniqueId + '_encriptado');
        const textoDescifrado = localStorage.getItem(uniqueId + '_descifrado');

        // Colocar los valores en los campos de entrada
        document.getElementById('inputText').value = textoEncriptado;
        document.getElementById('outputText').value = textoDescifrado;
    };

    // Añadir el nuevo botón al mensaje
    mensaje.appendChild(nuevoBoton);

    // Guardar en local storage usando el identificador único
    localStorage.setItem(uniqueId + '_encriptado', textoE);
    localStorage.setItem(uniqueId + '_descifrado', textoD);
}

function desencriptar() {
    let texto = document.getElementById('inputText').value;
    let textoDesencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('outputText').value = textoDesencriptado
}

async function copiar() {
    let texto = document.getElementById('outputText').value;
    try {
        await navigator.clipboard.writeText(texto);
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}