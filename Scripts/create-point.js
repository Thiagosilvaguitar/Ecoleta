

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
.addEventListener("change", getCities)
