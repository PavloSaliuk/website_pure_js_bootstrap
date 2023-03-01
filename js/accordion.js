(() => {
    const textParagraph = [
      "Make your choice",
      "Meet your beer",
      "Meet your beer and make your choice",
      "Share with your friends",
    ];
    function getRandomParagraph() {
      const index = Math.floor(Math.random() * textParagraph.length);
      return textParagraph[index];
    }
    function changeChoiseParagraph() {
      const title = document.querySelector(".choise__paragraph_question");
      title.innerHTML = getRandomParagraph();
    }
    setInterval(changeChoiseParagraph, 4000);
})();