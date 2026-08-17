 const nome = document.getElementById("nome")

async function buscar(){
 alert ("Minha buscar funciona! Oba!")
 const response = await fetch(`https://viacep.com.br/ws/${55014460}/json/`)
 let endereco = await response.json()
 console.log(inputNome.value)
}
function enviar(){
 alert ("uhuuull")
 