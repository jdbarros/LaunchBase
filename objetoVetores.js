// Desafios para fortalecer alguns conceitos, entre eles:

// Objetos;
// Vetores.
// Construção e impressão de objetos

// Criei um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// // Endereço:
// // Rua: Rua Guilherme Gembala
// // Número: 260
// // Obs.: Para armazenar os dados de endereço da empresa eu criei objetos intercalados:

// const usuario = {
//   nome: "Rocketseat",
//   cor: "Roxo",
//   foco: "Programação",
//   Endereco : {
//     Rua: "Rua Guilherme Gembala",
//     Numero: 260,
//   },
  
// }

// console.log(`A empresa ${usuario.nome} está localizada em ${usuario.Endereco.Rua}, ${usuario.Endereco.Numero}.`)

// O programa imprime em tela a seguinte mensagem:

// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260


// Vetores e objetos
// Criei um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

const programador = [
      { nome: "Carlos", tecnologia:'C++', especialidade: 'Desktop' },
      { nome: "Diego", tecnologia: 'Python', especialidade: 'Data Science' },
      { nome: "Pedro", tecnologia: 'JavaScript', especialidade: 'Web/Mobile' },
]


// Vai imprimir em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop.

console.log (`O usuário ${programador[0].nome} tem 32 anos e usa a tecnologia ${programador[0].tecnologia} com especialidade em ${programador[0].especialidade}.`)

