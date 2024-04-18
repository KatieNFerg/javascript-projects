// Define your Book class here:
class Book {
    construct (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
      this.title = title;
      this.author = author;
      this.copyright = copyright;
      this.isbn = isbn;
      this.pages = pages;
      this.timesCheckedOut = timesCheckedOut;
      this.discarded = discarded; 
    }
    checkout(users=1){
        this.timesCheckedOut += users;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(){
        if(this.timesCheckedOut > 100){
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let makingTheShip = new Manual('Top Secret Shuttle BUilding Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
let myNovel = new Novel('Pride and Prejudie', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No' );
// Code exercises 4 & 5 here:

console.log(myNovel.checkout(5));
console.log(myNovel.dispose());
console.log(myNovel);