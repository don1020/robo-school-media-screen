function makeCall() {
    // Replace with the desired phone number
    const phoneNumber = '1234567890'; 
    window.location.href = `tel:${phoneNumber}`;
}

function sendMessage() {
    // Replace with the desired message or action
    const message = 'Hello, I would like to inquire about your courses!';
    // This example opens the default messaging app with a pre-filled message
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
}