const prompt = require('prompt-sync')()
// -----------------------------------------------------------
const nome = "Iago"

const idade = "19"

let estudando = true

console.log(`${nome} tem ${idade} anos e agora está estudando? ${estudando}`)

console.log("--------------------------------------------------------------------------------------------------------------------------")

const horario = prompt("Informe a hora: ")

if (horario <= 12) {
  console.log("Agora é manhã")
} else if (horario <= 18) {
  console.log("Agora é tarde.")
} else {
  console.log("Agora é noite.")
}

console.log("--------------------------------------------------------------------------------------------------------------------------")

// const comidas = ["Arroz", "Feijão", "Batata Frita", "Lasanha", "Pizza"]
// console.log(comidas)
// console.log("---------------------------------------------------")

// const inserirComida = prompt("Escreva uma comida que você gostaria de adicionar no fim do array: ")
// comidas.push(inserirComida)
// console.log(comidas)
// console.log("---------------------------------------------------")

// const removerPrimeiro = comidas.shift()
// console.log(`Array de comidas com método shift(Remove o primeiro elemento): ${comidas}\nComida removida: ${removerPrimeiro}`)
// console.log("---------------------------------------------------")

// const tamanhoArray = comidas.length
// console.log(`Tamanho do array: ${tamanhoArray}`)

console.log("--------------------------------------------------------------------------------------------------------------------------")

// function soma(a, b){
//   a = parseInt(prompt("Insira um numero: "))
//   b = parseInt(prompt("Insira outro numero: "))

//   return a + b
// }

// console.log(soma())

console.log("--------------------------------------------------------------------------------------------------------------------------")

function invertString(texto) {
  // variável que vai acumular a string invertida
  let invertida = ""

  // começamos do último índice (texto.length - 1) e vamos até o índice 0, voltando um por vez
  for (let i = texto.length - 1; i >= 0; i--) {

      // adiciona o caractere atual (texto[i]) na variável invertida
      invertida += texto[i]
  }

  // retorna a string montada ao contrário
  return invertida
}

console.log(invertString("cafe"))

console.log("--------------------------------------------------------------------------------------------------------------------------")

numeros = [1, 2, 5, 10, 4, 40, 5, 53]


function encontrarMaiorNumero (){
    let maiorNumero = 0
    for (i = 0; i < numeros.length; i++) {
    if (numeros[i] >= maiorNumero){
      maiorNumero = numeros[i]
    }
  }

  return maiorNumero
}

console.log(encontrarMaiorNumero())
