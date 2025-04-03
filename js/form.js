
//class contato

class contato {
    ////Exportar a lista do html para o JS
    constructor (nome, email, telefone, contato ,mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem
    }
}
//função para enviar os dados
function Post(form) {
    //variavel para armazenar os dados
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);
            console.table(data);
  Enviar(data);
}
//fução do botão enviar
function Enviar(data) {
    if (data.nome != "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
}

function Car () {
    setInterval(() => {
        document.querySelector('#car1').style.display = 'none';
        document.querySelector('#car2').style.display = 'block';
    }, 2750);
}