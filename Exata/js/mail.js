function enviaEmail() {
    var email_enviado = false;
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    Email.send("contato@exataprojetos.com.br",
        "letiiribeiro@gmail.com",
        "Mensagem recebida no site",
        "<b>Nome:</b> " + name + "<br>" + "Email: " + email + "<br>" + "Mensagem: " + message + "<br>",
        {
            token: "ef4c4cb8-fef6-4cc3-a85a-7d0c85c7ce5a",
            callback: function done(message) {
                alert("Email enviado com sucesso!");
                email_enviado = true;
            }
        }
    );
    while(!email_enviado);
}