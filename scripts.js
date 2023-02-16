function sendMail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lanedenny99@gmail.com",
        Password : "password",
        To : 'lanedenny99@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact us for pig dice",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}