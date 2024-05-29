// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const EventGenresChart = ({events}) => {

    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#74B3CE', '#508991', '#172A3A', '#004346', '#09BC8A'];

    useEffect(() => {
        setData(getData());
      }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre, index) => {
            const filteredEvents = events.filter(event => event.summary.includes(genre))
            return {
                name: genre,
                value: filteredEvents.length,
                color: colors[index]
            }
        })
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, innerRadius, percent, index }) => {
      const RADIAN = Math.PI / 180;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return percent ? (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {` ${(percent * 100).toFixed(0)}%`}
        </text>
        ) : null;
      };

    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart
              margin={{
                top: 20,
                right: 50,
                bottom: 60,
                left: 60,
              }}
          >
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
              cx="50%" cy="50%"
              outerRadius={140}
            >
            {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))
                }
            </Pie>
            <Legend />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />       
          </PieChart>
        </ResponsiveContainer>
      );

}

export default EventGenresChart;