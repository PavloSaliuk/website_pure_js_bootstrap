(() => {

    const messages = [
        'Make your choise',
        'Meet your beer',
        'Meet your beer and make your choise',
        'Share with your friends'
    ]
    function getGreeting() {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
    function changeTitle() {
        const title = document.querySelector('.choise__paragraph_question')
        title.innerHTML = getGreeting();
    }
    // function changeChoiseParagraph() {
    //     let choiseTitle = document.querySelector('.choise__paragraph_question');
    //     choiseTitle.innerText = "Meet your beer and make your choise"; 
    // }
    setInterval(changeTitle, 4000)
}
)();