const cliente = {
    nome: "Joao",
    idade: "24",
    email: "joao@firma.com",
    telefone: ["11133455", "99999999"],
};

cliente.enderecos = [
    {
        rua: "R. JOseph Climber",
        numero: 1337 ,
        apartamento: true,
        complemento: 'ap 934',
    }
]

cliente.enderecos.push({
    rua: "inambu",
    numero: 562,
    apartamento: false,
    complemnto: "ap 301",
})
// console.log(cliente.enderecos)

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos)