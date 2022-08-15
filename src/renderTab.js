import { divDisplay } from './index.js';
import { menu } from './menu.js';

const weekDays = [
    {
        name: 'Monday',
        open: '8am - 10pm'
    },
    {
        name: 'Tuesday',
        open: '8am - 10pm'
    },
    {
        name: 'Wednesday',
        open: '8am - 10pm'
    },
    {
        name: 'Thursday',
        open: '8am - 10pm'
    },
    {
        name: 'Friday',
        open: '8am - 10pm'
    },
    {
        name: 'Saturday',
        open: '9am - 10pm'
    },
    {
        name: 'Sunday',
        open: '10am - 8pm'
    },
]


export function renderHome() {
    divDisplay.innerHTML = '';
    // Home display creation
    const displayHome = document.createElement('div');
    displayHome.setAttribute('id', 'display-home');
    divDisplay.appendChild(displayHome);

    // Home display childs creation
    const header = document.createElement('header');
    const headerHOne = document.createElement('h1');
    headerHOne.innerText = 'Traditional Italian Cousine';
    header.appendChild(headerHOne);
    displayHome.appendChild(header);

    const hrOne = document.createElement('hr');
    displayHome.appendChild(hrOne);

    const spanDescr = document.createElement('span');
    spanDescr.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velitLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptate sapiente quia velit'
    displayHome.appendChild(spanDescr);

    const hrTwo = document.createElement('hr');
    displayHome.appendChild(hrTwo);

    const footer = document.createElement('h2');
    footer.innerText = 'Check out our Menu!';
    displayHome.appendChild(footer);

}
export function renderMenu() {
    divDisplay.innerHTML = '';

    const displayMenu = document.createElement('div');
    displayMenu.classList.add('display-menu');
    divDisplay.appendChild(displayMenu);

    for (let pizza of menu) {
        const menuPosition = document.createElement('div');
        menuPosition.classList.add('menuPosition');
        displayMenu.appendChild(menuPosition);

        const image = document.createElement('img');
        image.setAttribute('src', `../src/img/${pizza.image}`);
        menuPosition.appendChild(image);

        const titleSection = document.createElement('div');
        titleSection.classList.add('title-section');
        menuPosition.appendChild(titleSection);
        const hOne = document.createElement('h1');
        hOne.innerText = pizza.name;
        titleSection.appendChild(hOne);

        const descSection = document.createElement('div');
        descSection.classList.add('desc-section');
        menuPosition.appendChild(descSection);

        const ul = document.createElement('ul');
        descSection.appendChild(ul);

        const descr = document.createElement('span');
        descr.innerText = pizza.descr;

        for (let ingr of pizza.ingredients) {
            const li = document.createElement('li');
            li.innerText = ingr;
            ul.appendChild(li);
        }
        descSection.appendChild(descr);

        const price = document.createElement('h3');
        price.innerText = `Price: \$${pizza.price}`;
        descSection.appendChild(price);
    }
}
export function renderContact() {
    divDisplay.innerHTML = '';

    const displayContact = document.createElement('div');
    displayContact.classList.add('display-contact');
    divDisplay.appendChild(displayContact);

    const hTitle = document.createElement('h1')
    hTitle.innerText = 'Contact';
    displayContact.appendChild(hTitle);

    const hr = document.createElement('hr');
    displayContact.appendChild(hr);

    const hPhone = document.createElement('h3');
    hPhone.innerText = '📞 123 456 789';
    displayContact.appendChild(hPhone);

    const hAddress = document.createElement('h3');
    hAddress.innerText = '🏡 Hollywood Boulevard 42, Los Angeles, USA';
    displayContact.appendChild(hAddress);

    const hOpen = document.createElement('h3');
    hOpen.innerText = '📅Open:';
    displayContact.appendChild(hOpen);

    const ul = document.createElement('ul');
    displayContact.appendChild(ul);

    for (let i = 0; i < 7; i++) {
        const li = document.createElement('li');
        li.innerText = `${weekDays[i].name}: ${weekDays[i].open}`;
        ul.appendChild(li);
    }
}
