/*
Classicifcar porte automatico
Criar um script que classifique o porte com base no peso de forma simplificada sendo:
- ate 10Kg -> pequeno, acima disso -> medio

*/

function verificaPorte(peso, nome) {
    const porte = peso < 10 ? 'Pequeno' : 'Medio'
    console.log("O porte do " + nome + " é: " + porte + " pois ele pesa " + peso + "KG")
}

verificaPorte(5, 'Pipoca')
verificaPorte(9, 'Guarana')
verificaPorte(10, 'Lucky')
verificaPorte(11, 'Tommy')
verificaPorte(20, 'Gordo')