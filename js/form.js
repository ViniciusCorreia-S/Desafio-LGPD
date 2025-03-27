
//class contato

class contato {
    ////Exportar a lista do html para o JS
    constructor (nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}
//função para enviar os dados
function Post(form) {
    //variavel para armazenar os dados
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
            console.table(data);
  Enviar(data);
}
//fução do botão enviar
function Enviar(data) {
    if (data.nome != "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
    
    
}