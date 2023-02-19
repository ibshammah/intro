var urlAtual = window.location.href;
var urlClass = new URL(urlAtual);
var nome = urlClass.searchParams.get("nome");
document.getElementById("text").innerText = nome;
