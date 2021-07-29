import {createItemElement} from './event';
import {createEventEditElement} from './event-edit';

const QUANTITY_ITEMS = 3;
const renderEvents = () => {
  let events = '';
  for (let i = 0; i < QUANTITY_ITEMS; i++) {
    events += createItemElement();
  }
  return events;
};

const createItemsElement = () => (
  `<ul class="trip-events__list">
      ${createEventEditElement()}
      ${renderEvents()}
     </ul>
  `
);

export {createItemsElement};
