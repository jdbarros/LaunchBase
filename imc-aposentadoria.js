// Desafios do curso LauchBase da Rocketseat
// Desafio n° 1
// Criar um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comecei criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

// // A partir desses dados armazenei em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
const imc =  peso / (altura * altura) 

// Baseado no valor obtido através desse cálculo o programa vai exibir as seguintes mensagens:
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// // SE o IMC menor que 29.9: Carlos você não está acima do peso;

if (imc >= 30) {

    console.log('Carlos você está acima do peso')  
    } else {
    console.log('Carlos você não está acima do peso') 
    }    
    
// 2° desafio do primeiro exercício - Cálculo de aposentadoria
// Criei um programa para calcular a aposentadoria de uma pessoa.
// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

// Comecei criando constantes para armazenar nome, sexo, idade e contribuicao(em anos):

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 38;

//Baseado nos valores acima utilizei as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

const calculaMedia = (idade + contribuicao);

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

if ( sexo == "F")
if ( calculaMedia >= 85) {
    console.log(`${nome}, você pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

if ( sexo == "M")
if ( calculaMedia >= 95) {
    console.log(`${nome}, você pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

// Com base nas regras acima e de acordo com a constante na tela vai pode imprimir as seguintes mensagens:
// SE a pessoa estiver aposentada: 'Nome da pessoa', você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: 'Nome da pessoa', você ainda não pode se aposentar!;



