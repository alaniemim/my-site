    let titulo = document.getElementById('tituloprincipal')
    let h = document.getElementById('horario')
    let d = new Date()
    let hora = d.getHours()
    let minutes = d.getMinutes()
    h.innerHTML=`agora sao ${hora}:${minutes}H.`

   // nome = prompt('olá, por favor nos diga qual e seu nome')
    titulo.innerHTML=`seja bem vindo(a) ${nome}.`
    
