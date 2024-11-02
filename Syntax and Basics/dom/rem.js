// Get DOM elements
const createBtn = document.getElementById('createBtn');
const cloneBtn = document.getElementById('cloneBtn');
const taskList = document.getElementById('taskList');
const container = document.querySelector('.container');

// Counter for temporary paragraphs
let paragraphCount = 1;
// Counter for cloned items
let cloneCount = 1;

// Function to create and remove temporary paragraph
function createTemporaryParagraph() {
    // Create new paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = `Temporary Paragraph ${paragraphCount++} (will be removed in 3 seconds)`;
    paragraph.className = 'temp-paragraph';
    
    // Add to container after the buttons
    container.insertBefore(paragraph, document.querySelector('.list-container'));
    
    // Remove after 3 seconds
    setTimeout(() => {
        // Add fade out effect before removing
        paragraph.style.opacity = '0';
        paragraph.style.transform = 'translateY(-10px)';
        paragraph.style.transition = 'all 0.5s ease';
        
        // Remove after animation
        setTimeout(() => {
            paragraph.remove();
        }, 500);
    }, 3000);
}

// Function to clone list item
function cloneListItem() {
    // Get the first list item
    const firstItem = taskList.querySelector('li');
    
    // Clone the item
    const clonedItem = firstItem.cloneNode(true);
    
    // Modify the cloned item's text
    clonedItem.firstChild.textContent = `Cloned Task ${cloneCount++}`;
    
    // Add delete functionality to the cloned item's button
    const deleteBtn = clonedItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        deleteListItem(clonedItem);
    });
    
    // Append to list
    taskList.appendChild(clonedItem);
}

// Function to delete list item
function deleteListItem(item) {
    // Add fade out effect
    item.style.opacity = '0';
    item.style.transform = 'translateX(20px)';
    item.style.transition = 'all 0.3s ease';
    
    // Remove after animation
    setTimeout(() => {
        item.remove();
    }, 300);
}

// Add event listeners
createBtn.addEventListener('click', createTemporaryParagraph);
cloneBtn.addEventListener('click', cloneListItem);

// Add delete functionality to existing delete buttons
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        deleteListItem(this.parentElement);
    });
});

// Optional: Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'T' to create temporary paragraph
    if (e.key === 't' || e.key === 'T') {
        createTemporaryParagraph();
    }
    // Press 'C' to clone list item
    if (e.key === 'c' || e.key === 'C') {
        cloneListItem();
    }
});