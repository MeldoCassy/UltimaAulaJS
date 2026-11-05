const formulario = document.getElementById ("formulario")
formulario.addEventListener("submit", function (event){
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const Membros = document.getElementById("Membros").value
    const mensagem = document.getElementById("mensagem").value

    if(telefone.trim() === ""){
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp = 
    `
        Olá! gostaria de ser uma ATINY!
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone}
        Membros: ${Membros}
        Mensagem: ${mensagem}
    `

    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    const numeroWhatasapp = "5513978103954"
    const link = "https://wa.me/" + numeroWhatasapp + "?text=" + mensagemCodificada
    
    window.location.href = link
}) 