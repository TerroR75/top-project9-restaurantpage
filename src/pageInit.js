const bodyElement = document.querySelector('body');

function appendBgLogo() {
    // Main DIV id='bg-image'
    const divBgImage = document.createElement('div');
    divBgImage.setAttribute('id', 'bg-image');
    bodyElement.appendChild(divBgImage);

    // bg-image Child
    const divRestaurantName = document.createElement('div');
    divRestaurantName.setAttribute('id', 'restaurant-name');
    divBgImage.appendChild(divRestaurantName);

    // restaurant-name childs
    const nameA = document.createElement('h1');
    const nameB = document.createElement('h1');
    const hr = document.createElement('hr');
    nameA.innerText = 'Ristorante';
    nameB.innerText = 'Tradizionale';
    divRestaurantName.appendChild(nameA);
    divRestaurantName.appendChild(hr);
    divRestaurantName.appendChild(nameB);
}

function appendMainContent() {
    // #content div
    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'content');
    bodyElement.appendChild(divContent);

    // #content childs
    const header = document.createElement('header');
    const divDisplay = document.createElement('div');
    divDisplay.classList.add('display');
    divContent.appendChild(header);
    divContent.appendChild(divDisplay);

    // header child
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navbar');
    header.appendChild(nav);

    // #navbar childs
    const btnHome = document.createElement('button');
    btnHome.setAttribute('id', 'btnHome');
    btnHome.innerText = 'Home';
    btnHome.classList.toggle('btnActive');
    btnHome.dataset.tab = 'home';

    const btnMenu = document.createElement('button');
    btnMenu.setAttribute('id', 'btnMenu');
    btnMenu.innerText = 'Menu';
    btnMenu.dataset.tab = 'menu';

    const btnContact = document.createElement('button');
    btnContact.setAttribute('id', 'btnContact');
    btnContact.innerText = 'Contact';
    btnContact.dataset.tab = 'contact';
    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnContact);


    // Add classes to buttons
    btnHome.classList.add('btnTab');
    btnMenu.classList.add('btnTab');
    btnContact.classList.add('btnTab');
}


export default function () {
    appendBgLogo();
    appendMainContent();
}