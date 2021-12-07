function carregar() {
    var msg = window.document.getElementById('mensagem');
    var img = window.document.getElementById('imagemdafoto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        // bom dia 
        img.src = 'paginamanhaweb.png'
        document.body.style.background = '#e3e7c6'
    } else if (hora >= 12 && hora < 18 ) {
        // boa tarde 
        img.src = 'paginatardeweb.png'
        document.body.style.background = '#cb8f48'
    } else { 
        img.src = 'paginaNoiteweb.png'
        document.body.style.background = '#121534'
        // boa noite 
    }
}