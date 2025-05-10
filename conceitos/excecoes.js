/**
 * 
 * tentear {
 * // conexao com banco (exemplo)
 * } pegar (erro/exceceo) {
 *  salvar execao em algum lugar...
 *  exibir...
 * }
 */

try {
    // console.log(`Tentando alimentar o Pet...`)
    let nome = 'Gustavo'
    // throw new Error(`Nao deu certo`)
} catch(excecao) {
    // console.log(excecao)
    console.log(excecao.nome)
} finally {
    // SEMPRE VAI SER EXECUTADO
    console.log(`Nome completo: Gustavo Schmidt`)
}