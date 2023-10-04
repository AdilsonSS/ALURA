let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto' )
    exibirTextoNaTela('p', 'Escolha um No. entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value

    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!' )
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo()

    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

/*
function exibirOla() {
    console.log("Olá, mundo!");
  }
  
  exibirOla();

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
  
exibirOlaNome("Adilson");

function calcularDobro(numero) {
    return numero * 2;
}
  
let resultadoDobro = calcularDobro(5);
    console.log(resultadoDobro);


    function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
    
let media = calcularMedia(4, 7, 10);
console.log(media);


function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(18, 9);
  console.log(maiorNumero);
  */