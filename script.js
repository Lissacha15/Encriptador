const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

 


//La letra "e" es convertida para "eau"
//La letra "i" es convertida para "ici"
//La letra "a" es convertida para "aime"
//La letra "o" es convertida para "oui"
//La letra "u" es convertida para "une"

function btnencriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptada){
    let matrizCode = [["a", "aime"],["e", "eau"],["i", "ici"], ["o", "oui"], ["u", "une"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <matrizCode.length;i++){
        if(stringEncriptada.includes(matrizCode[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0],matrizCode[i][1])

        }

    }
    return stringEncriptada
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(stringDesencriptada){
    let matrizCode = [["a", "aime"],["e", "eau"],["i", "ici"], ["o", "oui"], ["u", "une"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i <matrizCode.length;i++){
        if(stringDesencriptada.includes(matrizCode[i][1])){
            stringDesencriptada= stringDesencriptada.replaceAll(matrizCode[i][1] , matrizCode[i][0])

        }

    }
    return stringDesencriptada
}
// const btnCopiar = document.createElement("button");

// btnCopiar.textContent = "copiar";
// btnCopiar.className = "btn-copiar";


function btncopiar(){
const textoAcopiar = mensaje.value
navigator.clipboard.writeText(textoAcopiar);
//     btnCopiar.textContent="ya copie";
alert("Texto copiado");


}

