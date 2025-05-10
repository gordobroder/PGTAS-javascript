/**
 * 
 *  describe -> agrupador de testes
 *  it       -> implementacao do teste
 */
import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Teste Do Projeto', () => {
    it('Deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Pipoca'), 'PIPOCA')
    });

    it('primeiro teste', () => {
        
    });

    it('segundo teste', () => {
        
    });
})