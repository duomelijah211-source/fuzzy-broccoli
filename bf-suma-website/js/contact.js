document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    // Clear any restored form values when the page loads
    form.reset();

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name) {

    alert("Please enter your name.");

    return;

}

if (!phone) {

    alert("Please enter your phone number.");

    return;

}

if (!message) {

    alert("Please enter your message.");

    return;

}

        const whatsappMessage =
`Hello Elijah,

My name is ${name}.

Phone: ${phone}

Subject: ${subject || "General Inquiry"}

Message:
${message}`;

        const url = `https://wa.me/254141976773?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");

        // Reset the form after opening WhatsApp
        form.reset();

    });

});