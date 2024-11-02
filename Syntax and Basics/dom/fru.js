// Select all list items with the class 'fruit'
const fruits = document.querySelectorAll('.fruit');

// Loop through each fruit element
fruits.forEach(fruit => {
    // Log the nodeName of the fruit element
    console.log('Fruit element nodeName:', fruit.nodeName); // Should log 'LI'

    // Log the nodeName of the parent element
    console.log('Parent element nodeName:', fruit.parentNode.nodeName); // Should log 'UL'

    // Check for child nodes of the fruit element and log their nodeNames
    if (fruit.childNodes.length > 0) {
        fruit.childNodes.forEach(child => {
            console.log('Child nodeName:', child.nodeName); // Log child nodes (if any)
        });
    } else {
        console.log('This element has no child nodes.');
    }
});
