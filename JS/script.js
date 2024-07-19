
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
        alert('Texto copiado al portapapeles');
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
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}