document.addEventListener('DOMContentLoaded', function() {
    var mobileInput = document.getElementById('mobileInput');
    var emailInput = document.getElementById('emailInput');
    var messageInput = document.getElementById('messageInput');

    mobileInput.addEventListener('invalid', function(event) {
        if (mobileInput.validity.valueMissing) {
            mobileInput.setCustomValidity('Please enter your mobile number.');
        } else if (mobileInput.validity.patternMismatch) {
            mobileInput.setCustomValidity('Please enter a valid 10-digit mobile number.');
        } else {
            mobileInput.setCustomValidity('');
        }
    });

    mobileInput.addEventListener('input', function(event) {
        mobileInput.setCustomValidity('');
    });

    emailInput.addEventListener('invalid', function(event) {
        if (emailInput.validity.valueMissing) {
            emailInput.setCustomValidity('Please enter your email address.');
        } else if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    emailInput.addEventListener('input', function(event) {
        emailInput.setCustomValidity('');
    });

    // Auto-resize textarea
    function autoResizeTextarea(element) {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    }

    messageInput.addEventListener('input', function() {
        autoResizeTextarea(messageInput);
    });

    // Initialize height
    autoResizeTextarea(messageInput);
});
