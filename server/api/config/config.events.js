/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
let ConfigEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ConfigEvents.setMaxListeners(0);

// Model events
let events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Thing) {
  for(let e in events) {
    let event = events[e];
    Thing.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ConfigEvents.emit(`${event}:${doc._id}`, doc);
    ConfigEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ConfigEvents;
