import {createItemElement} from './event';

const QUANTITY_ITEMS = 9;
const renderEvents = () => {
  let events = '';
  for (let i = 0; i < QUANTITY_ITEMS; i++) {
    events += createItemElement();
  }
  return events;
};

const createItemsElement = () => (
  `<ul class="trip-events__list">
      ${renderEvents()}
     </ul>
  `
);

export {createItemsElement};
