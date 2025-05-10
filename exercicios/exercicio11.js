/**
 * Distribuidor de petiscos
 * 
 * Cria uma lista de dogs: Pipoca, Guarana e Thor
 * Cria um script para entregar 1 petisco para cada cao da lista
 * Exiba uma mensagem como "Entregando petisco para Pipoca"
 * 
 * Mantenha os dados e funcao em arquivos separados, use modularizacao para organizar
 */

import { listaDogs } from "./exercicio10.js";

function darPetisco(lista) {
    lista.forEach(dog => {
        console.log(`Dando petisco para ${dog}`)
    });
}

darPetisco(listaDogs)