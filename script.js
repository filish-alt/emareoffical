function sendEmail(){
    let param ={
        name : document.getElementById("name").value,
        email : document.getElementById("phone").value,
        phonenumber : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_gh00ihj","template_66y5c01",param).then(alert("Email Sent!!"))
}

let currentIndex = 0;

const logos = document.querySelectorAll('.logo-container');
const totalLogos = logos.length;

function slideLogos() {
    logos[currentIndex].style.transform = 'translateX(-100%)'; // Move current out
    currentIndex = (currentIndex + 1) % totalLogos; // Move to next
    logos[currentIndex].style.transform = 'translateX(0)'; // Bring the next into view

    // Reset the previous logo's position
    setTimeout(() => {
        logos[(currentIndex - 1 + totalLogos) % totalLogos].style.transform = 'translateX(100%)'; // Move it back to offscreen
    }, 500); // Delay should match the CSS transition duration
}

// Slide every 3 seconds (3000ms)
setInterval(slideLogos, 3000);
