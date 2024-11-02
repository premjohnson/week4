
function changeTextWithInnerHTML() {
    const mainTitle = document.getElementById('main-title');
    mainTitle.innerHTML = 'Updated Title with <em>innerHTML</em>!';
}
function changeTextWithTextContent() {
    const mainTitle = document.getElementById('main-title');
    mainTitle.textContent = 'Updated Title with textContent!';
}
function changeParagraphText() {
    const paragraphs = document.getElementsByClassName('text');
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = `This is paragraph ${i + 1} after updating!`;
    }
}


function showDifference() {
    const container = document.querySelector('.container p');

    container.innerHTML = 'This text is <strong>bold</strong> with innerHTML';
    setTimeout(() => {
       
        container.textContent = 'This text is <strong>bold</strong> with textContent';
    }, 2000);
}
document.getElementById('changeColorBtn').addEventListener('click', () => {
    changeTextWithInnerHTML();
    changeParagraphText();
    showDifference();
});
let clickCount = 0;
document.getElementById('main-title').addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 === 0) {
        changeTextWithInnerHTML();
    } else {
        changeTextWithTextContent();
    }
});