<?php

// //Defino a Chave do meu site
// $secret_key = '|*SEU-SECRET-KEY*|';

// //Pego a validação do Captcha feita pelo usuário
// $recaptcha_response = $_POST['g-recaptcha-response'];

// // Verifico se foi feita a postagem do Captcha 
// if(isset($recaptcha_response)){
		
// 	// Valido se a ação do usuário foi correta junto ao google
// 	$answer = 
// 		json_decode(
// 			file_get_contents(
// 				'https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.
// 				'&response='.$_POST['g-recaptcha-response']
// 			)
// 		);

// 	// Se a ação do usuário foi correta executo o restante do meu formulário
// 	if($answer->success) {
		
		// Carrego a classe PHPMailer através do Autoload
		include "PHPMailerAutoload.php";

		// Instancio a classe PHPMailer
		$msg = new PHPMailer();
		if(isset($_POST["submit"])){
		// Faço todas as configurações de SMTP para o envio da mensagem
		$msg->CharSet = "UTF-8";
		$msg->isSMTP();                                      
		$msg->Host = '|*smtp.exataprojetos.com.br*|';  
		$msg->SMTPAuth = true;                              
		$msg->Username = '|*contato@exataprojetos.com.br*|';                 
		$msg->Password = '|*flavinha*|';                           
		$msg->Port = 587;   
		$msg->SMTPAutoTLS = false;
		$msg->AuthType = 'PLAIN';

		//Defino o remetente da mensagem
		$msg->setFrom('|*contato@exataprojetos.com.br*|','|*Exata Projetos*|');

		// Defino a quem esta mensagem será respondida, no caso, para o e-mail
		// que foi cadastrado no formulário
		$msg->addReplyTo($_POST['email'], $_POST['name']);
		
		// Defino a mensagem como mensagem de texto (Ou seja não terá formatação HTML)
		$msg->IsHTML(false);

		// Adiciono o destinatário desta mensagem, no caso, 
		//minha conta de contatos comerciais.
		$msg->AddAddress('|*contato@exataprojetos.com.br*|', '|*Exata Projetos*|');

		// Defino a mensagem que foi digitada no formulário
		$msg->Body = $_POST['message'];

		// Defino a mensagem alternativa que foi digitada no formulário.
		// Esta mensagem é utilizada para validações AntiSPAM e por isto
		// é muito recomendado que utilize-a
		$msg->AltBody = $_POST['message'];

		// Faço o envio da mensagem
		$enviado = $msg->Send();
		
		// Limpo todos os registros de destinatários e arquivos 
		$msg->ClearAllRecipients();

		// Caso a mensagem seja enviada com sucesso ela retornará sucesso
		// senão, ela retornará o erro ocorrido			
		if ($enviado){
			echo "E-mail enviado com sucesso!";
			console.log("enviou");
		}
		else {
			console.log("ERRO");
			echo "Não foi possível enviar o e-mail.";
			echo "<b>Informações do erro:</b> " . $msg->ErrorInfo;
		}
	// }
	}
	// // Caso o Captcha não tenha sido validado 
	// //retorno uma mensagem de erro. 
	// else {
	// 	echo "Por favor faça a verificação do captcha abaixo";
	// }
// }