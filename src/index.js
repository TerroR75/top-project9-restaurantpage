import initializePage from './pageInit.js';
import tabFunction from './tabFunctions.js';
import { renderHome } from './renderTab.js';
import './css/main.css';

initializePage();

export const divDisplay = document.querySelector('.display');




// Tabs functions
const tabs = document.querySelectorAll('.btnTab');

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('btnActive')) tabFunction(btn, tabs);
    })
});
// ================ //

renderHome();




