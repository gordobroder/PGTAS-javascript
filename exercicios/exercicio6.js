/*
Crie um script q defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, medio ou grande)
e o tempo disponivel para a atividade representando em minutos

exemplo:

Pantera - medio - 45

use uma condicional para deicidir o tipo de atividade com base no porte:
- pequeno -> brincar dentro de casa
- medio -> caminhada no quarteirao
- grande -> correr no parque
- qualquer outro -> porte invalido

depois, uma condicional para ajustar a mensagem de acordo com o tempo
- menor que 15 -> atividade rapida: [atividade]
- de 15 a 30 -> "Tempo ideal: [atividade]"
- acdima de 30 -> "Hora da diversao: [atividade]"
*/

const nome = "Pipoca"
const porte = "pequeno"
const tempo = 10

let atividade
let descricao

function verificarBrincadeira(nome, porte, tempo){
    switch(porte){
        case 'pequeno':
            atividade = ` brincar dentro de casa`
            break
        case 'medio':
            atividade = ` brincar no patio do predio`
            break
        case 'grande':
            atividade = ` correr no parque`
            break
        default:
            atividade = ` porte invalido`
    }
    
    if (tempo <= 15) {
        descricao = ` atividade rapida: `
    } else if (tempo < 30) {
        descricao = ` tempo ideal: `
    } else if (tempo > 30) {
        descricao = ` hora da diversao! `
    }

    console.log("Mensagem para " + nome + descricao,atividade)
}

verificarBrincadeira("Pipoca", "pequeno", 15)
verificarBrincadeira("Guarana", "pequeno", 16)
verificarBrincadeira("Lucky", "pequeno", 30)
verificarBrincadeira("Judy", "pequeno", 31)
verificarBrincadeira("Pipoca", "medio", 15)
verificarBrincadeira("Guarana", "medio", 16)
verificarBrincadeira("Lucky", "medio", 30)
verificarBrincadeira("Judy", "medio", 31)
verificarBrincadeira("Pipoca", "grande", 15)
verificarBrincadeira("Guarana", "grande", 16)
verificarBrincadeira("Lucky", "grande", 30)
verificarBrincadeira("Judy", "grande", 31)




function atividadePorPorte(porte, tempo) {

    switch(porte){
        case "Pequeno":
            console.log("Brincar na cama")
            break
        case "Medio":
            console.log("Correr no quintal")
    }

}