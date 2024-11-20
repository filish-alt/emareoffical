

     // Initialize EmailJS with public key

    function sendEmail() {
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phonenumber: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };
        emailjs.init("vTXLWu_VT5pqSqkRC");

        if (!params.name || !params.phonenumber || !params.email || !params.message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        emailjs.send("service_p90obsk", "template_fkzjw61", params)
            .then(() => {
                alert("Email Sent Successfully!");
                clearForm(); // Clear form fields
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send email. Please try again.");
            });
    }

    function clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
   



 currentIndex = 0;

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
