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
    },
 ];

const chavesDoObjet = Object.keys(cliente)

console.log(chavesDoObjet)

if (!chavesDoObjet.includes("enderecos")) {
    console.error("Erro. É necessário ter ender cadastrado")
}