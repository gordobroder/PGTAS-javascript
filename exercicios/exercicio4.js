/* 
Calculadora de racao diaria

crie um script que receba o peso do dog em KG + o estoque atual de racao em gramas. 
Calcule a quantidade diaraia de racao com base no seguinte formula: gramas por dia = peso x30

exiba:
- Nome do dog
- Peso
- Quantidade de racao recomendada por dia
- Quantos dias o estoque atual vai durar

*/

const nomeDog = 'Pipoca'
const pesoDog = 7
const pesoRacao = 14000

calculaRacao(pesoDog, pesoRacao, nomeDog)
function calculaRacao(pesoDog, pesoRacao, nomeDog) {
    let consumoDiario = pesoDog * 30
    let estoqueEmDias = Math.round(pesoRacao / consumoDiario)
    let pesoRacaoEmKg = pesoRacao / 1000
    console.log(`Peso do seu dog: ${pesoDog}`)
    console.log(`Nome do seu dog: ${nomeDog}`)
    console.log(`Estoque de raçao em KG: ${pesoRacaoEmKg}`)
    console.log(`Consumo ideal diario: ${consumoDiario} gramas`)
    console.log(`Seu estoque de racao ira durar por ${estoqueEmDias}`)
}