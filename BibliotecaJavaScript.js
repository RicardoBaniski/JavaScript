function ExibeCabecalhoH1(msg) {
    document.writeln("<h1>" + msg + "</h1>");
}

function ExibeCabecalhoH2(msg) {
    document.writeln("<h2>" + msg + "</h2>");
}

function ExibeCabecalhoH3(msg) {
    document.writeln("<h3>" + msg + "</h3>");
}

function NumeroPar(numero){
    var retorno = false;
    if (numero % 2 == 0) {
        retorno = true;
    }
    return retorno;
}