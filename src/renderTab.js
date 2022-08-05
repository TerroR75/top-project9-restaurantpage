import { divDisplay } from './index.js';


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

}
export function renderContact() {

}
