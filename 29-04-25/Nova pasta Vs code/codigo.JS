console.log ("Esta mensagem aparecerá no console, não na página.");

function adicione_elemento (valor, nome_elemento = "p") {
 const pai = document.getElementById("conteudo");
 const novo_elemento = document.createElement(nome_elemento);
novo_elemento.innerHTML = valor;
pai.appendChild(novo_elemento);
}

adicione_elemento("Olá, qual sua idade?");
adicione_elemento("Bom dia pessoal!");
adicione_elemento("Esta mensagem aparecerá no título H1");
adicione_elemento("Esta mensagem aparecerá na página como um tí", "H2");
adicione_elemento("Título H3", "H3")
adicione_elemento("Título H4", "H4");
adicione_elemento("Título H5","H5");
adicione_elemento("Título H6", "H6");
let nome = prompt("Qual seu nome?");
adicione_elemento(nome, "H1");
adicione_elemento("Aparecerá na página como um parágrafo", "p");
adicione_elemento("aparecerá um parágrafo, 'p' como padrão.");
console.log("Esta aparecrá no console, pois usa console.log().");