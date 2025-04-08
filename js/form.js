
//class contato

class contato {
    ////Exportar a lista do html para o JS
    constructor (nome, email, cpf, telefone, contato ,mensagem, Termos, Notificação) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
        this.Termos = Termos;
        this.Notificação = Notificação;
    }
}
//função para enviar os dados
function Post(form) {
    //variavel para armazenar os dados
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("CPF").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value,
            form.elements.namedItem("Termos").checked,
            form.elements.namedItem("Notificações").checked);
            console.table(data);
  Enviar(data);
}
//fução do botão enviar
function Enviar(data) {
    if (data.nome != "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
}

function Button_enable(el) {

    const button = document.querySelector('.button');

    if (el.checked) {
        button.style.background = '#1351d8';
        button.disabled = false;
    }
    else {
        button.style.background = 'gray';
        button.disabled = true;
    }
}

function Car () {
    setTimeout(() => {
        document.querySelector('#car1').style.display = 'none';
        document.querySelector('#car2').style.display = 'block';
        // document.querySelector('#car3').style.display = 'block';
    }, 3000);

    setTimeout(() => {
        document.querySelector('#car2').style.display = 'none';
        document.querySelector('#car3').style.display = 'block';
    }, 3300);
}