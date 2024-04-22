// src/components/EventList.js

import Event from './Event';

const EventList = ({events}) => {
    return (
      <ul id="event-list">
        {events? 
          events.map(event => <Event key={event.id} event={event} />): 
          null}
      </ul>//unordered list is assigned 'list' role by default
    );
  }
  
  export default EventList;