// src/components/CityEventsChart.js

import { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({allLocations, events}) => {

    //get number of events in each city and shorten each location to only the city
    const getData = () => {
        const data = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
          const city = location.split(', ')[0]
          return { city, count };
        })
        return data;
      };

}

export default CityEventsChart;