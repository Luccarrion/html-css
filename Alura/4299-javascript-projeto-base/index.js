const inputItem = document.getElementById("input-item")
const listaDeCompas = document.getElementById("lista-de-compras")

let contador = 0;
const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === '') {
        alert('Insira um item')
        retunrn
    }

    const itemDaLista = document.createElement("li") // cria uma variável que será o elemento no documento, nesse caso um <li> 
    const conteinerItemDaLista = document.createElement("div") // mesma coisa do anterior, porém será uma div
    conteinerItemDaLista.classList.add("lista-item-container") // pega o elemento criado conteinerItemDaLista, acessa a lista de classes css e então atribui um ao elemento 
    const inputCheckbox = document.createElement("input") // cria uma variável para receber o elemento input no documento HTML
    inputCheckbox.type = "checkbox" // define o elemento inputCheckbox como tipo checkbox HTML
    inputCheckbox.id = "checkbox-" + contador++ // define o ID do inputCheckbox como uma str "checkbox-(uma variável do tipo let que incrementa seu número)"
    const nomeItem = document.createElement("p") // cria uma variável nomeItem para ser o parágrafo no documento
    nomeItem.innerText = inputItem.value // pega a variável nomeItem, acessa o texto interno 'innerText' e altera o valor str nela para o que foi inserido no objeto inputItem 
    conteinerItemDaLista.appendChild(inputCheckbox) // pega a div criada e define o inputCheckbox como 'filho' innerChild da div
    conteinerItemDaLista.appendChild(nomeItem) // pega a div conteinerItemDaLista e define nomeItem como innerChild
    itemDaLista.appendChild(conteinerItemDaLista) // acessa o <li> que contém a div e seus filhos e a define como innerChild
    listaDeCompas.appendChild(itemDaLista) // acessa a variável que recebeu a <ul> e define o <li> como inner
})