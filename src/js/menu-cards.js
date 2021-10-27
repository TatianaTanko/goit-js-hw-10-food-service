import menuCardsTpl from '../templates/menu-cards.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');
//console.log(menuCardsTpl);

const markup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markup);