// ===============================
// KONOZ CONTACT FORM
// ===============================

const whatsappBtn = document.querySelector(".whatsapp-btn");
const emailBtn = document.querySelector(".email-btn");

function getFormData() {

    return {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        country: document.getElementById("country").value.trim(),

        service: document.getElementById("service").value,

        destination: document.getElementById("destination").value.trim(),

        checkin: document.getElementById("checkin").value,

        checkout: document.getElementById("checkout").value,

        guests: document.getElementById("guests").value,

        message: document.getElementById("message").value.trim()

    };

}
function validateForm(data){

    if(data.name === ""){

        alert("Please enter your full name.");

        return false;

    }

    if(data.email === ""){

        alert("Please enter your email address.");

        return false;

    }

    if(!data.email.includes("@")){

        alert("Please enter a valid email address.");

        return false;

    }

    if(data.phone === ""){

        alert("Please enter your WhatsApp number.");

        return false;

    }

    if(data.destination === ""){

        alert("Please enter your destination.");

        return false;

    }

    if(data.checkin === ""){

        alert("Please select your check-in date.");

        return false;

    }

    if(data.checkout === ""){

        alert("Please select your check-out date.");

        return false;

    }

    if(data.checkout < data.checkin){

        alert("Check-out date must be after check-in date.");

        return false;

    }

    return true;

}
whatsappBtn.addEventListener("click", () => {

    const d = getFormData();

    if(!validateForm(d)) return;

    const text = `Hello Konoz Travel,

I'd like to request a quotation.

--------------------------------

Full Name:
${d.name}

Email:
${d.email}

WhatsApp:
${d.phone}

Country:
${d.country}

Service:
${d.service}

Destination:
${d.destination}

Check In:
${d.checkin}

Check Out:
${d.checkout}

Guests:
${d.guests}

Special Requests:
${d.message}`;

    const url =
        `https://wa.me/971506067941?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

});

emailBtn.addEventListener("click", () => {

    const d = getFormData();

    if(!validateForm(d)) return;

    const subject = "Luxury Travel Inquiry";

    const body = `Full Name: ${d.name}

Email: ${d.email}

WhatsApp: ${d.phone}

Country: ${d.country}

Service: ${d.service}

Destination: ${d.destination}

Check In: ${d.checkin}

Check Out: ${d.checkout}

Guests: ${d.guests}

Special Requests:

${d.message}`;

    window.location.href =
        `mailto:support@konoztravel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

});