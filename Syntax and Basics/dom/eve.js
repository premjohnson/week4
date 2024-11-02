// Get DOM elements
const randomColorBtn = document.getElementById('randomColorBtn');
const colorOptions = document.querySelectorAll('.color-option');
const currentColor = document.getElementById('currentColor');
const colorPreview = document.getElementById('colorPreview');
const demoForm = document.getElementById('demoForm');
const successMessage = document.getElementById('successMessage');

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update color display
function updateColorDisplay(color) {
    document.body.style.backgroundColor = color;
    currentColor.textContent = color;
    colorPreview.style.backgroundColor = color;
}

// Random color button event listener
randomColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    updateColorDisplay(newColor);
});

// Color option buttons event listeners
colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const color = this.dataset.color;
        updateColorDisplay(color);
    });
});

// Form submission event handler
demoForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: this.name.value,
        email: this.email.value,
        timestamp: new Date().toLocaleString()
    };
    
    // Log form submission
    console.log('Form submitted!');
    console.table(formData);
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

// Optional: Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'R' for random color
    if (e.key === 'r' || e.key === 'R') {
        const newColor = getRandomColor();
        updateColorDisplay(newColor);
    }
});

// Optional: Save color preference to localStorage
function saveColorPreference(color) {
    localStorage.setItem('preferredColor', color);
}

// Optional: Load color preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedColor = localStorage.getItem('preferredColor');
    if (savedColor) {
        updateColorDisplay(savedColor);
    }
});

// Optional: Double-click to reset to white
document.addEventListener('dblclick', function() {
    updateColorDisplay('#ffffff');
});

// Add transition end listener to body
document.body.addEventListener('transitionend', function() {
    console.log(`Background color transition completed: ${document.body.style.backgroundColor}`);
});