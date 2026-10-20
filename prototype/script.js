document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('button');
    const icon = item.querySelector('.plus');

    if (!trigger || !icon) return;

    const syncExpanded = () => {
      const isOpen = item.classList.contains('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      icon.textContent = isOpen ? '−' : '+';
    };

    trigger.setAttribute('aria-expanded', String(item.classList.contains('open')));
    syncExpanded();

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach((faq) => {
        faq.classList.remove('open');
        const otherIcon = faq.querySelector('.plus');
        const otherButton = faq.querySelector('button');
        if (otherIcon) otherIcon.textContent = '+';
        if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
      }

      syncExpanded();
    });
  });

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      const shouldShow = window.scrollY > 300;
      backToTop.classList.toggle('visible', shouldShow);
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
  }
});
