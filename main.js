// JSON
fetch('./books.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    ourBooks(data);
  });

let body = document.querySelector('body');
let container = document.getElementById('container');
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer');

let booksContainer = document.createElement('div');
booksContainer.className = 'books-container';
main.appendChild(booksContainer);

container.appendChild(header);
container.appendChild(main);
container.appendChild(footer);

// Bag Section 
let bagContainer = document.createElement('div');
bagContainer.className = 'bag-container';
main.appendChild(bagContainer);

let bagHeader = document.createElement('div');
bagHeader.className = 'bag-header';
bagContainer.appendChild(bagHeader);

let bagMain = document.createElement('div');
bagMain.className = 'bag-main';
bagContainer.appendChild(bagMain);

let bagHeading = document.createElement('h2');
bagHeading.className = 'bag-heading';
bagHeading.innerHTML = 'Shopping Cart';
bagHeader.appendChild(bagHeading);

let subTotal = document.createElement('h3');
subTotal.className = 'sub-total';
subTotal.innerHTML = 'Subtotal: $'
bagHeader.appendChild(subTotal);

let confirm = document.createElement('button');
confirm.className = 'confirm';
confirm.innerHTML = 'Confirm Order'
bagHeader.appendChild(confirm);

// Header Section 

let headerContainer = document.createElement('div');
let headerLink = document.createElement('a');

headerContainer.className = 'header-container';
headerLink.className = 'header-link';

header.appendChild(headerContainer);
headerContainer.appendChild(headerLink);

headerLink.innerHTML = 'BOOKSTORE';
headerLink.href = 'https://abulkosim.github.io/book-shop';

// Main Section 
function ourBooks(books) {
  books.forEach(book => {
    let bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';

    let image = document.createElement('img')
    image.className = 'book-image';
    image.src = book.imageLink;

    let bookInformation = document.createElement('div');
    bookInformation.className = 'book-information';

    let bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.innerHTML = book.title;

    let bookWriter = document.createElement('p');
    bookWriter.className = 'book-writer';
    bookWriter.innerHTML = 'By ' + book.author;

    let bookPrice = document.createElement('p');
    bookPrice.className = 'book-price';
    bookPrice.innerHTML = '$' + book.price;

    let buttons = document.createElement('div');
    buttons.className = 'buttons';

    let showMore = document.createElement('button');
    showMore.className = 'show-more';
    showMore.innerHTML = 'Show More';

    let addBag = document.createElement('button');
    addBag.className = 'add-bag';
    addBag.innerHTML = 'Add to Bag';

    addBag.addEventListener("click", () => addBooks(book));

    buttons.appendChild(showMore);
    buttons.appendChild(addBag);

    bookInformation.appendChild(bookTitle);
    bookInformation.appendChild(bookWriter);
    bookInformation.appendChild(bookPrice);
    bookInformation.appendChild(buttons)

    bookContainer.appendChild(image);
    bookContainer.appendChild(bookInformation);


    booksContainer.appendChild(bookContainer)

    // Show More
    let showMoreContainer = document.createElement('div');

    let showMoreHeader = document.createElement('div');
    let showMoreMain = document.createElement('div');

    showMoreContainer.className = 'show-more-container';
    showMoreHeader.className = 'show-more-header';
    showMoreMain.className = 'show-more-main';

    let heading = document.createElement('h2');
    let closeButton = document.createElement('button');

    heading.className = 'heading';
    closeButton.className = 'close-button';

    heading.innerHTML = 'Details';
    closeButton.innerHTML = '&times;'

    let showMoreTitle = document.createElement('p');
    let showMoreWriter = document.createElement('p');
    let showMoreDescription = document.createElement('p');

    showMoreTitle.className = 'show-more-title';
    showMoreWriter.className = 'show-more-writer';
    showMoreDescription.className = 'show-more-description';

    showMoreTitle.innerHTML = book.title;
    showMoreWriter.innerHTML = 'By ' + book.author;
    showMoreDescription.innerHTML = book.description;

    showMoreHeader.appendChild(heading);
    showMoreHeader.appendChild(closeButton);
    showMoreMain.appendChild(showMoreTitle);
    showMoreMain.appendChild(showMoreWriter);
    showMoreMain.appendChild(showMoreDescription);
    showMoreContainer.appendChild(showMoreHeader);
    showMoreContainer.appendChild(showMoreMain);

    showMore.addEventListener('click', () => {
      body.appendChild(showMoreContainer);
    })

    closeButton.addEventListener('click', () => {
      body.removeChild(showMoreContainer);
    })
  })
}

function addBooks(book) {
  let image = document.createElement('img')
  image.className = 'book-image';
  image.src = book.imageLink;

  let bookInformation = document.createElement('div');
  bookInformation.className = 'book-information';

  let bookTitle = document.createElement('p');
  bookTitle.className = 'book-title';
  bookTitle.innerHTML = book.title;

  let bookWriter = document.createElement('p');
  bookWriter.className = 'book-writer';
  bookWriter.innerHTML = 'By ' + book.author;

  let bookPrice = document.createElement('p');
  bookPrice.className = 'book-price';
  bookPrice.innerHTML = '$' + book.price;

  let deleteBook = document.createElement('button');
  deleteBook.className = 'delete-book';
  deleteBook.innerHTML = '&times;';

  deleteBook.addEventListener("click", () => {
    bagMain.removeChild(cartBook);
  });

  let cartBook = document.createElement('div');
  cartBook.className = 'cart-book';

  cartBook.appendChild(image);
  bookInformation.appendChild(bookTitle);
  bookInformation.appendChild(bookWriter);
  bookInformation.appendChild(bookPrice);
  cartBook.appendChild(bookInformation);
  cartBook.appendChild(deleteBook);

  bagMain.appendChild(cartBook);
}
// Footer Section 
let footerContainer = document.createElement('div');
let footerGithub = document.createElement('a');
let footerDate = document.createElement('div');
let footerRS = document.createElement('a');

footerContainer.className = 'footer-container';
footerRS.className = 'footer-rs';

footer.appendChild(footerContainer);
footerContainer.appendChild(footerGithub);
footerContainer.appendChild(footerDate);
footerContainer.appendChild(footerRS);

footerGithub.innerHTML = '<i class="fa-brands fa-github"></i> GitHub'
footerDate.innerHTML = '&#169; 2022';
footerRS.innerHTML = '<img src="https://rollingscopes.com/images/logo_rs_text.svg" alt="RS-School">';

footerRS.href = 'https://rs.school/';
footerGithub.href = 'https://github.com/Abulkosim';

