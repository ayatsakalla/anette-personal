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