function encriptar() {
    const texto = document.getElementById("textoingresado").value.toLowerCase();

    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensajesNo").style.display = "none";
    document.getElementById("areaMostrar").innerHTML = textoCifrado
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inherit"
}

function desencriptar(){
    var texto = document.getElementById("textoingresado").value.toLowerCase();
    var textoDescifrado = texto.replace(/enter/igm,"e");
    var textoDescifrado = textoDescifrado.replace(/ober/igm,"o");
    var textoDescifrado = textoDescifrado.replace(/imes/igm,"i");
    var textoDescifrado = textoDescifrado.replace(/ai/igm,"a");
    var textoDescifrado = textoDescifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensajesNo").style.display = "none";
    document.getElementById("areaMostrar").innerHTML = textoDescifrado;
    document.getElementById("botoncopiar").style.display ="show";
    document.getElementById("botoncopiar").style.display ="inherit";
}

function copiar(){
    var textocopiar = document.getElementById("areaMostrar");
    navigator.clipboard.writeText(textocopiar.value);
    document.getElementById("textoingresado").value="";
    alert("Texto copiado");
}
