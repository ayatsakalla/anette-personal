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

// journal carousel: load articles from JSON and build cards
const journalCarousel = document.getElementById('journalCarousel');

if (journalCarousel) {
    fetch('journal.json')
        .then(res => res.json())
        .then(articles => {
            articles.forEach(article => {
                const card = document.createElement('div');
                card.className = 'journal-card';
                card.innerHTML = `
                    <div class="journal-card-image">
                        <img src="${article.image}" alt="${article.title}">
                    </div>
                    <div class="journal-card-body">
                        <h3 class="canela soft-charcoal">${article.title}</h3>
                        <div class="journal-card-divider"></div>
                        <a href="${article.link}" target="_blank" rel="noopener" class="journal-card-link montserrat">
                            READ HERE →
                        </a>
                    </div>
                `;
                journalCarousel.appendChild(card);
            });

            if (articles.length < 3) {
                journalCarousel.classList.add('journal-carousel-centered');
            }
        })
        .catch(err => console.error('Could not load journal.json', err));

    // arrow buttons scroll the carousel
    const prevBtn = document.querySelector('.journal-nav-prev');
    const nextBtn = document.querySelector('.journal-nav-next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            journalCarousel.scrollBy({ left: -journalCarousel.clientWidth * 0.9, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            journalCarousel.scrollBy({ left: journalCarousel.clientWidth * 0.9, behavior: 'smooth' });
        });
    }
}

// journal stay-connected message (same pattern as footer)
const journalUrlParams = new URLSearchParams(window.location.search);
const journalSubscribed = journalUrlParams.get('subscribed');
const journalMessageEl = document.getElementById('journal-subscribe-message');

if (journalMessageEl && journalSubscribed === 'success') {
    journalMessageEl.textContent = "Thank you — you're on the list.";
    journalMessageEl.classList.add('success');
} else if (journalMessageEl && journalSubscribed === 'error') {
    journalMessageEl.textContent = 'Something went wrong. Please try again.';
    journalMessageEl.classList.add('error');
}

