/* 
Script para controle de petiscos usando FOR
Recebe uma quantidade de petiscos, de 1 por vez ate o dog estiver satisfeito

exibir: cada vez q o petisco for entregue
- quando o dog estiver satisfeito (quando acabam os petiscos)
*/

// const petiscos = 6
// var petiscosDado = 0
// for (petiscosDado = 1; petiscosDado <= petiscos; petiscosDado ++) {
//     console.log(`Petisco ${petiscosDado} dado para seu dog!`)
// }
// console.log("Ufa! Me parece que o dog esta cheio!")

function alimentaDog(petiscos) {
    for (petiscosDado = 1; petiscosDado <= petiscos; petiscosDado ++) {
        console.log(`Petisco ${petiscosDado} dado para seu dog!`)
    }
    console.log("Ufa! Me parece que o dog esta cheio!")
}

alimentaDog(5)
alimentaDog(3)
alimentaDog(6)