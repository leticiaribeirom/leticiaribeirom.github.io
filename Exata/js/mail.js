function enviaEmail() {
    Email.send("contato@exataprojetos.com.br",
        "letiiribeiro@gmail.com",
        "Mensagem recebida no site",
        "this is the body",
        {
            token: "ef4c4cb8-fef6-4cc3-a85a-7d0c85c7ce5a",
            callback: function done(message) {
                alert("sent");
            }
        }
    );
}