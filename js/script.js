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

    // Crear un nuevo contenedor para los botones
    const contenedorBotones = document.createElement('div');
    contenedorBotones.id = uniqueId;
    contenedorBotones.className = 'contenedor-botones';

    // Crear un nuevo botón para mostrar
    const nuevoBoton = document.createElement('button');
    nuevoBoton.innerText = 'Mostrar ' + currentDate;

    // Crear un nuevo botón para editar
    const botonEditar = document.createElement('button');
    const iconoEditar = document.createElement('i');
    iconoEditar.className = 'fas fa-edit icono-editar'; 
    botonEditar.appendChild(iconoEditar);

    // Crear un nuevo botón para borrar
    const botonBorrar = document.createElement('button');
    const iconoBorrar = document.createElement('i');
    iconoBorrar.className = 'fas fa-trash icono-borrar';
    botonBorrar.appendChild(iconoBorrar);

    // Añadir eventos onclick a los botones
    nuevoBoton.onclick = function() {
        // Obtener los valores de localStorage usando el identificador único
        const textoEncriptado = localStorage.getItem(uniqueId + '_encriptado');
        const textoDescifrado = localStorage.getItem(uniqueId + '_descifrado');

        // Colocar los valores en los campos de entrada
        document.getElementById('inputText').value = textoEncriptado;
        document.getElementById('outputText').value = textoDescifrado;
    };

    botonEditar.onclick = function() {
        // Obtener el nuevo nombre para el botón "Mostrar"
        const nuevoNombre = prompt("Editar nombre", nuevoBoton.innerText.replace('Mostrar ', ''));
        if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
            // Actualizar el texto del botón "Mostrar"
            nuevoBoton.innerText = nuevoNombre;
        }
    };

    botonBorrar.onclick = function() {
        // Borrar los elementos del localStorage
        localStorage.removeItem(uniqueId + '_encriptado');
        localStorage.removeItem(uniqueId + '_descifrado');

        // Remover el contenedor de botones
        contenedorBotones.remove();
    };

    // Añadir los botones al contenedor
    contenedorBotones.appendChild(nuevoBoton);
    contenedorBotones.appendChild(botonEditar);
    contenedorBotones.appendChild(botonBorrar);

    // Añadir el contenedor de botones al mensaje
    mensaje.appendChild(contenedorBotones);

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