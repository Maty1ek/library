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

function clearInputs() {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].value = ''
    }
    yesOption.selected = true
}

function addBookToPage() {
    for (let i = 0; i < bookLibrary.length; i++) {
        var add_name = bookLibrary[i].name
        var add_author = bookLibrary[i].author
        var add_year = bookLibrary[i].year
        var add_pages = bookLibrary[i].pages
        var add_read = bookLibrary[i].read
    }

    const bookContent = `<h1>${add_name}</h1>
                <h2>Author: <span>${add_author}</span></h2>
                <h3>Was written: <span>${add_year}</span></h3>
                <h3>Pages: <span>${add_pages}</span></h3>
                `

    bookItemElements(add_read, bookContent)
}

function bookItemElements(addRead, bookContent) {
    const deleteBtn = document.createElement('button')
    const readBtn = document.createElement('button')
    const readOrNot = document.createElement('h3')
    const buttonContainer = document.createElement('div')
    const bookItem = document.createElement('div')

    let readValue = addRead ? 'Alreafy read' : 'Not read yet'

    readOrNot.innerHTML = readValue

    deleteBtn.className = 'delete_btn'
    deleteBtn.type = 'button'
    deleteBtn.innerHTML = 'Delete'

    readBtn.className = 'read_btn'
    readBtn.type = 'button'
    readBtn.innerHTML = 'Read'

    buttonContainer.className = 'book_item_buttons'
    buttonContainer.appendChild(readBtn)
    buttonContainer.appendChild(deleteBtn)

    bookItem.className = 'book_item'
    bookItem.innerHTML = bookContent
    bookItem.appendChild(readOrNot)
    bookItem.appendChild(buttonContainer)

    bookCards.appendChild(bookItem)

    deleteBtn.addEventListener('click', () => {
        bookItem.remove()
    })

    readBtn.addEventListener('click', () => {
        addRead ? addRead = false : addRead = true
        readOrNot.innerHTML = !addRead ? 'Not read yet' : 'Alreafy read'
    })
}

function toggleModal() {
    modalWindow.classList.toggle('dis_flex')
}

addBtn.addEventListener('click', toggleModal)

crossBtn.addEventListener('click', toggleModal)

form.addEventListener('submit', addBookToLibrary)