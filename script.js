document.querySelectorAll('.order-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const itemText = this.getAttribute('data-text'); // Get the inner text of the clicked link
        const phoneNumber = '+918814026000'; // Your phone number
        const message = `I would like to order: ${itemText}`; // Create the message

        // Construct the WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

        // Open the WhatsApp link directly
        window.open(whatsappUrl, '_blank');
    });
});