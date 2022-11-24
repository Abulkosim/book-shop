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

container.appendChild(header);
container.appendChild(main);
container.appendChild(footer);

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

    buttons.appendChild(showMore);
    buttons.appendChild(addBag);

    bookInformation.appendChild(bookTitle);
    bookInformation.appendChild(bookWriter);
    bookInformation.appendChild(bookPrice);
    bookInformation.appendChild(buttons)

    bookContainer.appendChild(image);
    bookContainer.appendChild(bookInformation);

    main.appendChild(bookContainer)
  })
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

