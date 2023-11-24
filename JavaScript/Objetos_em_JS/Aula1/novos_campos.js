const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

pessoa.cpf = "111111111";
pessoa.seguroSocial = "123456789";

console.log(pessoa);
console.log(pessoa.cpf.substring(0,4));