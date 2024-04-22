// src/components/EventList.js

import Event from './Event';

const EventList = ({events}) => {
    return (
      <ul id="event-list">
        {events.map(event => <Event event={event} />)}
      </ul>//unordered list is assigned 'list' role by default
    );
  }
  
  export default EventList;