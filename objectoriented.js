class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isAvailable = true;
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        }else{
            console.log(`${this.title} is not available.`);
        }
    }
    returnBook(){
        this.isAvailable = true;
        console.log(`${this.title} has been returned`);
    }
    getDetails(){
        console.log(`Book Title: ${this.title}
            Author: ${this.author}
            Price: ${this.price}
            available: ${this.isAvailable}`)
    }
}
const book1 = new Book("The Alchemist","paulo Coelho",15);
const book2 = new Book("Atomic Habbits","James Clear",20);
book1.getDetails();
book1.borrowBook();
book1.borrowBook();
book1.returnBook();
book2.getDetails();