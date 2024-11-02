const mainTitle = document.getElementById('main-title');
alert('Selected by ID: ' + mainTitle.innerText);


const textElements = document.getElementsByClassName('text');
alert('Selected by Class: ' + Array.from(textElements).map(element => element.innerText).join(', '));

const paragraphElements = document.getElementsByTagName('p');
alert('Selected by Tag Name: ' + Array.from(paragraphElements).map(element => element.innerText).join(', '));


const firstParagraph = document.querySelector('p');
alert('Selected by querySelector (first paragraph): ' + firstParagraph.innerText);


const allParagraphs = document.querySelectorAll('p');
alert('Selected by querySelectorAll (all paragraphs): ' + Array.from(allParagraphs).map(element => element.innerText).join(', '));


const changeParagraphColor = () => {
    allParagraphs.forEach(paragraph => {
        paragraph.style.backgroundColor = 'lightblue';
    });
    alert('Changed background color of all paragraphs!');
};

document.getElementById('changeColorBtn').addEventListener('click', changeParagraphColor);
