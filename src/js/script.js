function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
}

// CLEAN THE SCREEN
function clean() {
    document.querySelector(".tela").innerHTML = ""
}

// CLEAN ONE BY ONE
function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length -1)
}

function somar() {
    let tela = document.querySelector('.tela').innerHTML;
    if(tela) {
        document.querySelector('.tela').innerHTML = eval(tela);
    } else {
        document.querySelector('.tela').innerHTML = "nenhum comando..."
    }
}