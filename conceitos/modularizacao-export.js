/**
 * Sintaxe CommonJS:
 *  module.exports = {} / require('')
 * 
 * ESM - Ecmascript Standard Modules
 *  export {} / import 
 */

function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdadePet(paramIdadePet) {
    console.log(`A idade do pet é ${paramIdadePet}`)
}


exibirIdadePet(`4`)
exibirNomePet(`Pipoca`)
exibirNomePet(`Guarana`)

// export {} / import

export {
    exibirNomePet
}