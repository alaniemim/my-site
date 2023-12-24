let w = document.getElementById('welcome')
let visitante = prompt('Diga seu nome: ')
let msg = window.alert(`Caro ${visitante}, a algo escondido nesse site, quando encontrar, me diga a chave secreta e passarei a informacao secreta.`)
w.innerHTML = `Bem vindo: ${visitante}!!`