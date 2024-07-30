const addBtn = document.getElementById('addBook')
const form = document.getElementById('modalWindowForm')
const modalWindow = document.getElementById('modalWindow')
const crossBtn = document.getElementById('crossBtn')
const bookCards = document.getElementById('bookCards')
const inputs = document.querySelectorAll('input')
const yesOption = document.getElementById('yesOption')

const inputsArray = Array.from(inputs)
bookLibrary = []

function BookItem(name, author, year, pages, read) {
    this.name = name
    this.author = author
    this.year = year
    this.pages = pages
    this.read = read
}

function addBookToLibrary(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('book_name');
    const author = formData.get('auth_name')
    const date = formData.get('date')
    const pages = formData.get('pages')
    const read = formData.get('select')
    const book = new BookItem(name, author, date, pages, read)
    bookLibrary.push(book)
    toggleModal()
    addBookToPage()
    clearInputs()
}

console.log(Object.getPrototypeOf(addBtn));

function clearInputs() {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].value = ''
    }
    yesOption.selected = true
}

function toggleModal() {
    modalWindow.classList.toggle('dis_flex')
}

addBtn.addEventListener('click', toggleModal)

crossBtn.addEventListener('click', toggleModal)

form.addEventListener('submit', addBookToLibrary)