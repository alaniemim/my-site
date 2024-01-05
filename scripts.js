let w = document.getElementById('welcome')
let visitante = prompt('Diga seu nome: ')
let msg = window.alert(`Ola ${visitante}, a algo escondido nesse site, quando encontrar, me diga a chave secreta para mais informacoes `)
w.innerHTML = `Bem vindo: ${visitante}!!`