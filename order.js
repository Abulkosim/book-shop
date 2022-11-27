let body = document.querySelector('body');

// Submit button
let submit = document.querySelector('.complete')

let toCompletes = document.querySelectorAll('.to-complete');

toCompletes = Array.from(toCompletes);

toCompletes.forEach(toComplete => {
  toComplete.addEventListener('keyup', () => {
    submit.disabled = !toCompletes.every(toComplete => toComplete.validity.valid);
  })
})

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

showMoreHeader.appendChild(heading);
showMoreHeader.appendChild(closeButton);

let firstName = document.querySelector("#name").value;
let lastName = document.querySelector('#surname').value;
let date = document.querySelector('#delivery-date').value;
let street = document.querySelector('#street-name').value;
let house = document.querySelector('#house-number').value;
let flat = document.querySelector('#flat-number').value;

showMoreMain.innerHTML = `<p>Name - ${firstName}</p> <p>Surname - ${lastName}</p> <p>Address - ${street}, ${house}, ${flat}</p><p>Date - ${date}</p>`;

showMoreContainer.appendChild(showMoreHeader);
showMoreContainer.appendChild(showMoreMain);


submit.addEventListener('click', () => {
  body.appendChild(showMoreContainer);
})

closeButton.addEventListener('click', () => {
  body.removeChild(showMoreContainer);
})


