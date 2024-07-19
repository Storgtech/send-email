function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "storgtech.tecnology@gmail.com",
    Password : "3602DDFFFCBB98B95476B70BA43421FE91CE",
    To : 'calembemarcoantonio@gmail.com',
    From : "storgtech.tecnology@gmail.com",
    Subject : "Subscrição de e-mail",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
