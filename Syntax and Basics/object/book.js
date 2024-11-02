function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
};

const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

book1.displayInfo(); 
book2.displayInfo(); 
