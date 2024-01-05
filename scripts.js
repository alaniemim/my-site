let w = document.getElementById('welcome')
let visitante = prompt('Diga seu nome: ')
let msg = window.alert(`Olá ${visitante}, há algo escondido nesse site, uma chave! Quando encontrar, coloque no campo informado e receba sua recompensa.`)
w.innerHTML = `Bem vindo: ${visitante}!`