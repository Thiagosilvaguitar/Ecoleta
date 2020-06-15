

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //fetch : Buscar
    .then(res => res.json()) // Funcçao anonima que retorna um valor transformou em json, Arrow Function
    .then(states =>{ //transformou em states
        for( const state of states)
ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` //estrutura de repetição onde seleciono o id com o valor e o nome do estado em opção
})
}
    populateUFs()

    function getCities(event){
        const citySelect = document.querySelector("select[name=city]")
        const stateInput = document.querySelector("input[name=state]")
       
    const ufValue =event .target.value
    const indexOfSelectedState = event.target.selectedIndex
     stateInput.value = event.target.options[indexOfSelectedState].text


     const url= `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios `
     citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
     citySelect.disabled = true
     fetch (url) //fetch : Buscar
     .then(res => res.json()) // Funcçao anonima que retorna um valor transformou em json, Arrow Function
     .then(cities =>{ //transformou em cidades
        
        for( const city of cities) {
 citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>` //estrutura de repetição onde seleciono o id com o valor e o nome do estado em opção
         }
         citySelect.disabled = false
})
    }

  

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities) //Ouvidor de eventos


// Itens de coleta
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
     const itemLi = event.target

// //Adicionar ou remover uma classe com javascript

itemLi.classList.toggle("selected")

const itemId = itemLi.dataset.id

               

// //verificar se existem itens selecionados
// // se sim, pegar os itens selecionados!

const alreadySelected = selectedItems.findIndex(item =>{
    const itemFound = item == itemId //isso será true ou false
    return itemFound
})



//Se ja estiver selecionado, tirar da seleção
if(alreadySelected >= 0) {
    //tirar da seleção
    const filteredItens = selectedItems.filter(item => {
    const itemIsDifferent = item !=itemId //false
        return itemIsDifferent
    })
    selectedItems = filteredItens
    //se nao estiver selecionado, adicionar a seleção
} else{
    selectedItems.push(itemId)
}

collectedItems.value = selectedItems
}


//atualizar o campo escondido com os dados selecionados
