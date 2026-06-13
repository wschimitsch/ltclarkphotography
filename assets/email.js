(function() {
    emailjs.init({
        publicKey: "Smm1l5N41UJklUq_p",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_gr9n329', 'template_wr35zn6', this)
            .then(() => {
                console.log('Email Sent! Success.');
                showAlert("Email sent successfully!", "success");
            }, (error) => {
                console.log('Email FAILED...', error);
                showAlert("Failed to send email. Please try again.", "danger");
            });
    });
}

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    alertPlaceholder.append(wrapper);

    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(wrapper.querySelector('.alert'));
        alert.close();
    }, 3000);
}