// ===============================
// KONOZ CONTACT FORM
// ===============================

const whatsappBtn = document.querySelector(".whatsapp-btn");
const emailBtn = document.querySelector(".email-btn");

function getFormData() {

    return {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        country: document.getElementById("country").value,

        service: document.getElementById("service").value,

        destination: document.getElementById("destination").value,

        checkin: document.getElementById("checkin").value,

        checkout: document.getElementById("checkout").value,

        guests: document.getElementById("guests").value,

        message: document.getElementById("message").value

    };

}

whatsappBtn.addEventListener("click", () => {

    const d = getFormData();

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