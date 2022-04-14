let myLibrary = [];

const addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener('click', openForm);

const add = document.querySelector(".add");
add.addEventListener('click', closeForm);

function openForm(){
   let f = document.querySelector(".form");
   f.style.display = "block";
}

function closeForm(){
    console.log("what");
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let genre = document.querySelector("#genre").value;
let readStatus = "";
if(document.querySelector("#read").checked){
readStatus = "Read";
}else if(document.querySelector("#notRead").checked){
    readStatus = "Not Read";
}
addBook(new Book(title, author, genre, readStatus));

console.log(myLibrary[2].author + " " + myLibrary[2].readStat);

document.querySelector(".form").style.display="none";
}

function Book(title, author, genre, readStat){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.readStat = readStat;
}

const book1 = new Book('One Piece', 'Eiichiro Oda', 'Fantasy Adventure', 'Read');
const book2 = new Book('Dunno', 'Anno Nimmus', 'Mystery', 'Not Read');

function addBook(Book){
    myLibrary.push(Book);
}



addBook(book1);
addBook(book2);