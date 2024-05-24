function emailSend() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var messageBody =
    "Name" + userName + "<br /> Phone" + phone + "<br /> Email" + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "emekav233@gmail.com",
    Password: "0716831B031C0D0103DD01A84EB07E8C4E97",
    To: "ifeygraceelectromecco@gmail.com",
    From: "emekav233@gmail.com",
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => alert(message));
}
