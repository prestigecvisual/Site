function gerarPDF(){
 const { jsPDF } = window.jspdf;
 const doc = new jsPDF();
 doc.text("Orçamento Prestige", 10, 10);
 doc.save("orcamento.pdf");
}
