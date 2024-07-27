function encriptar() {
    const texto = document.getElementById('inputText').value;
    const chave = parseInt(document.getElementById('key').value);
    document.getElementById('outputText').value = cifraDeCesar(texto, chave);
}

function decodificar() {
    const texto = document.getElementById('inputText').value;
    const chave = parseInt(document.getElementById('key').value);
    document.getElementById('outputText').value = cifraDeCesar(texto, -chave);
}

function cifraDeCesar(texto, chave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        const c = texto.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            resultado += String.fromCharCode((c - 65 + chave) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            resultado += String.fromCharCode((c - 97 + chave) % 26 + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}
