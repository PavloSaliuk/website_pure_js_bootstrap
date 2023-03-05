(() => {
    const timers = document.querySelectorAll('.timer');
    timers.forEach((timer) => {
        const dateString = timer.getAttribute('data-date');
        const eventDate = new Date(dateString);
        const diffTime = eventDate.getTime() - Date.now();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        timer.setAttribute('data-days', diffDays);
        timer.addEventListener('click', () => {
            const text = timer.getAttribute('data-text').replace('X', diffDays);
            alert(text);
        });
    });

})();

