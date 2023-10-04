let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function cancelar(){
    console.log('Clicado o botão cancelar que eu criei')
}

function cliqueConsole(){
    console.log('O botão console foi clicado')
}

function clickPrompt(){
    let cidade = window.prompt('Informe o nome de uma cidade do Brasil')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function clickalert(){
    window.alert('Eu am JS')
}

function somarDoisNumeros(){
    let n1 = parseInt(window.prompt('Digite um número'))
    let n2 = parseInt(window.prompt('Digite outro número'))
    let soma = n1+n2
    window.alert(`A soma de ${n1} e ${n2} é igual a ${soma}`)
}