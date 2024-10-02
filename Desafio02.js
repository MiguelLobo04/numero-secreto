function IMC(peso, altura) {
    let calculo = parseInt(peso / (altura * altura));
    console.log(calculo);
}
IMC (57, 1.65);

function fatorial(numero) {
    for (let posicao = numero ; posicao > 0 ; posicao--) {
        numero = numero * posicao;
    }
    //if (posicao > 0) {
    //    posicao--
    //    numero = numero * posicao;
    //}
    console.log(numero);    
}
fatorial (4);

function dolar(valor) {
    let real = (valor * 5.45);
    console.log(real);
}
dolar (2);

function sala(base, altura) {
    let area = (base * altura);
    let perimetro = (2 * (base + altura));
    console.log(area, perimetro);
}
sala (3,4);

function circular(raio) {
    let area = (Math.PI * (raio * raio));
    let perimetro = (2 * Math.PI * raio);
    console.log(`${area.toFixed(2)}`, `${perimetro.toFixed(2)}`);
}
circular (10);

function tabuada(numero) {
    for (let valor = 1 ; valor <= 10 ; valor++) {
        let vezes = numero * valor;
        alert (vezes);
    }
}
tabuada (5);