function enviarWhatsApp(){
 const numero = "5511922018290";
 const msg = "Orçamento Prestige";
 window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);
}

function enviarEmail(){
 window.location.href = "mailto:prestigecvisual@gmail.com";
}
