document.querySelectorAll('.footer-accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        btn.nextElementSibling.classList.toggle('is-open');
    });
});

const urlParams = new URLSearchParams(window.location.search);
const subscribed = urlParams.get('subscribed');
const messageEl = document.getElementById('subscribe-message');

if (messageEl && subscribed === 'success') {
    messageEl.textContent = "Thank you — you're on the list.";
    messageEl.classList.add('success');
} else if (messageEl && subscribed === 'error') {
    messageEl.textContent = 'Something went wrong. Please try again.';
    messageEl.classList.add('error');
}

// pre-select service dropdown based on URL parameter
const inquiryServiceSelect = document.getElementById('service');
if (inquiryServiceSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedService = urlParams.get('service');
    if (preselectedService) {
        inquiryServiceSelect.value = preselectedService;
    }
}

// inquiry form success/error message
const inquiryMsgParams = new URLSearchParams(window.location.search);
const inquirySubmitted = inquiryMsgParams.get('submitted');
const inquiryMessageEl = document.getElementById('inquiry-message');

if (inquiryMessageEl && inquirySubmitted === 'success') {
    inquiryMessageEl.textContent = "Thank you — your inquiry has been received. We'll be in touch soon.";
    inquiryMessageEl.classList.add('success');
} else if (inquiryMessageEl && inquirySubmitted === 'error') {
    inquiryMessageEl.textContent = 'Something went wrong. Please try again or email us directly.';
    inquiryMessageEl.classList.add('error');
}