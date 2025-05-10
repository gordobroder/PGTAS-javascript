/*
Entregador de brinquedo para dogs

Dado que vc tenha uma lista de brinquedos com: Bola Osso Corda Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez
exiba o nome de cada brinquedo que for entregue

Use forEach

Extra: Transforme em funcao
*/

const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino', 'Bichinho de Pelucia', 'Bolinha Vermelha']


function darBrinquedo(brinquedos) {
    brinquedos.forEach(element => {
        console.log(`Entregando ${element} para o seu dog!`)
    });
}

// darBrinquedo(brinquedos)


const brinquedosCompostos = [
    {
        nome: 'Bola',
        cor: 'Vermelha'
    },
    {
        nome: 'Macaquinho',
        cor: 'Marrom'
    },
    {
        nome: 'Osso',
        cor: 'Laranja'
    },
    {
        nome: 'Pera',
        cor: 'Verde'
    }
]

// brinquedosCompostos.forEach(brinquedo => {
//     console.log(`Entregando ${brinquedo.nome} de cor ${brinquedo.cor} para seu dog! Hora de brincar!`)
// });

const listaDogs = [`Pipoca`, `Guarana`, `Thor`, `Lucky`]

export {
    listaDogs
}