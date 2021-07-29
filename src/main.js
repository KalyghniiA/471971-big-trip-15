import {createMainInfoElement} from './view/main-info';
import {createNavigationMenuElement} from './view/navigation';
import {createFilterElement} from './view/filter';
import {createSortItemsElement} from './view/sort-items';
import {createItemsElement} from './view/events';

const mainInfoContainer = document.querySelector('.trip-main');
const navigationContainer = document.querySelector('.trip-controls__navigation');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventContainer = document.querySelector('.trip-events');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
render(mainInfoContainer, createMainInfoElement(), 'afterbegin');
render(navigationContainer,createNavigationMenuElement(), 'beforeend');
render(filterContainer, createFilterElement(), 'beforeend');
render(eventContainer, createSortItemsElement(), 'beforeend');
render(eventContainer,createItemsElement(), 'beforeend');


