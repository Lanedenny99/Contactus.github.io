function sendMail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lanedenny@gmail.com",
        Password : "4589D7B42BFFDCD5F85D035CC071FEA3BE49",
        To : 'lanedenny99@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact us for pig dice",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("message sent succesfully")
    );
}