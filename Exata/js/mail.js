function enviaEmail() {
    'use strict';
    var email_enviado = false;
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    Email.send("contato@exataprojetos.com.br",
        "letiiribeiro@gmail.com",
        "Novo recado na página de contato",
        "<h3>Olá, um visitante deixou um recado para você no site.</h3><br><br><h2><b>Nome:</b> " + name + "<br>" + "<b>Email:</b> " + email + "<br>" + "<b>Mensagem:</b> " + message + "<br></h2>", {
            token: "ef4c4cb8-fef6-4cc3-a85a-7d0c85c7ce5a",
            callback: function done() {
                alert("Email enviado com sucesso!");
            }
        }
    );
    // window.setTimeout(function (){}, 1000);
    return false;

}