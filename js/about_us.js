(() => {

    function updateClock() {
        const clockContainer = document.querySelector('.about_us_title_clock');
        clockContainer.innerText = ('Today is : ' + new Date().toLocaleString('uk'));
    }

    setInterval(updateClock, 1000);
    setTimeout(() => {
    } , 1000);

})();