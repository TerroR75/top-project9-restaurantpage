import { renderHome, renderMenu, renderContact } from './renderTab.js';





export default function (btn, tabs) {
    tabs.forEach(tab => {
        tab.classList.remove('btnActive');
    });
    btn.classList.toggle('btnActive');

    if (btn.dataset.tab === 'home') {
        renderHome();
    }
    else if (btn.dataset.tab === 'menu') {
        renderMenu();
    }
    else if (btn.dataset.tab === 'contact') {
        renderContact();
    }
    else {
        return;
    }
}