function sendEmail(){
    let param ={
        name : document.getElementById("name").value,
        email : document.getElementById("phone").value,
        phonenumber : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_gh00ihj","template_66y5c01",param).then(alert("Email Sent!!"))
}