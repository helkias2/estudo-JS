window.onload =function(){

    let btn3 = document.getElementById('nova');
    btn3.addEventListener('click', funcNova, false);


    // criar botoes diferentes
    let btn = document.getElementById('botao3');
    

    // friando novas funcoes
    let minhaFunc = function(){
        alert('Hello World');
    }

    //varia apresentacao
    btn.addEventListener('click', minhaFunc, false);
}

function funcNova(){
    alert("Hello Antonio");
}