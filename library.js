let myLibrary = [];
const book1 = new Book('One Piece', 'Eiichiro Oda', 'Fantasy Adventure', 'Read');
const book2 = new Book('Dunno', 'Anno Nimmus', 'Mystery', 'Not Read');

var ind = myLibrary.length;
console.log(ind);

var closeButt = document.querySelector(".close");
closeButt.addEventListener('click', () => {
    document.querySelector(".form").style.display="none";
})

const addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener('click', openForm);

const add = document.querySelector(".add");
add.addEventListener('click', addBookToTable);

function openForm(){
   let f = document.querySelector(".form");
   f.style.display = "block";
}

function addBookToTable(){
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let genre = document.querySelector("#genre").value;

if(title === "" || author === "" || genre === ""){
    alert("Please fill out all of the fields!");
}else{
document.querySelector('#title').value = null;
document.querySelector('#author').value = null;
document.querySelector('#genre').value = null;

let readStatus = "";
if(document.querySelector("#read").checked){
readStatus = "Read";
}else if(document.querySelector("#notRead").checked){
    readStatus = "Not Read";
}
addBook(new Book(title, author, genre, readStatus));

ind = myLibrary.length - 1;
makeTable();

document.querySelector(".form").style.display="none";
}
}

function Book(title, author, genre, readStat){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.readStat = readStat;
}


function addBook(Book){
    myLibrary.push(Book);
}

function makeTable(){
    let table = document.querySelector(".bookTable");
 
    let i = ind;
    ind = 0;
    myLibrary.forEach(function(item, index){
        if(ind >= i){
        let row = document.createElement('tr');
        let titl = document.createElement('td');
        titl.appendChild(document.createTextNode(item.title));
        row.appendChild(titl);
        let auth = document.createElement('td');
        auth.appendChild(document.createTextNode(item.author));
        row.appendChild(auth);
        let gen = document.createElement('td');
        gen.appendChild(document.createTextNode(item.genre));
        row.appendChild(gen);
        let r = document.createElement('td');
        r.appendChild(document.createTextNode(item.readStat));
        row.appendChild(r);
        
        table.appendChild(row);
        ind++;
        }else{
        ind++;
        }
    })
    ind = myLibrary.length;
}
