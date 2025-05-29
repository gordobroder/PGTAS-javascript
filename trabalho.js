// geradorDeTagsDeIdentificacao,
// verificarSePodeSerAdotado,
// calcularConsumoDeRacao,
// decidirTipoDeAtividadePorPorte,
// buscarDadoAsync

function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    if (idade == 1 && porte == 'M') {
        return true
    }
}

function calcularConsumoDeRacao(nome, dias, peso) {
    var consumoDiario = peso * 300
    return consumoDiario
}

function decidirTipoDeAtividadePorPorte(porte) {
    switch(porte){
        case 'pequeno':
            var atividade = `brincar dentro de casa`
            break
        case 'medio':
            var atividade = `brincar no patio do predio`
            break
        case 'grande':
            var atividade = `correr no parque`
            break
        default:
            var atividade = `porte invalido`
    }
    return atividade
}

async function buscarDadoAsync() {
    const listaDog = ['Pitoco', 'Pipoca', 'Guarana', 'Tobinho', 'Calanguinho']
    var nomeDog
    listaDog.forEach(dog => {
        if (dog === 'Pipoca') {
            nomeDog = dog
        }
    });
    return nomeDog
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}