class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {
    for (let book of this.books) {
        if (book.title === title && book.author === author) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
    }
    this.books.push({ title, author });
    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }

  addMember(memberName) {
    if (this.members.includes(memberName)) {
        return `Member ${memberName} is already a part of the book club.`;
    }
    this.members.push(memberName);
    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
        throw new Error(`Member ${memberName} not found.`);
    }
    const foundBookIndex = this.books.findIndex(book => book.title === bookTitle);
    if (foundBookIndex === -1) {
        throw new Error(`Book "${bookTitle}" not found.`);
    }
    const assignedBook = this.books.splice(foundBookIndex, 1)[0];
    return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
}


  generateReadingReport() {
    if (this.members.length === 0) {
        return "No members in the book club.";
    }
    if (this.books.length === 0) {
        return `No available books in the ${this.library} library.`;
    }
    let report = `Available Books in ${this.library} library:\n`;
    for (let book of this.books) {
        report += `"${book.title}" by ${book.author}\n`;
    }
    return report;
}


}

const myBookClub = new BookClub('The Bookaholics');

console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));

console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));

console.log(myBookClub.addBook("1984", "George Orwell"));

console.log(myBookClub.addMember("Alice"));

console.log(myBookClub.addMember("Peter"));

console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));


