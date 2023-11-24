const cliente = {
    nome: "Joao", idade: "24",
    email: "joao@firma.com",
    telefone: ["11133455", "99999999"],
};

cliente.enderecos = [
    {
        rua: "R. JOseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934',
    }
]

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}