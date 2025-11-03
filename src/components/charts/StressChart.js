import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { stressData } from '../../data/chartData';
import './Charts.css';

const StressChart = () => {
  return (
    <div>
      <h3 className="chart-title">Mental Health Indicators Over Time</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={stressData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="year" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="stress" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 6 }}
            activeDot={{ r: 8 }}
            name="Stress Level" 
          />
          <Line 
            type="monotone" 
            dataKey="anxiety" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', r: 6 }}
            activeDot={{ r: 8 }}
            name="Anxiety Level" 
          />
          <Line 
            type="monotone" 
            dataKey="depression" 
            stroke="#ec4899" 
            strokeWidth={3}
            dot={{ fill: '#ec4899', r: 6 }}
            activeDot={{ r: 8 }}
            name="Depression Level" 
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="chart-caption">
        Notable spike in all metrics during 2020-2021 pandemic period
      </p>
    </div>
  );
};

export default StressChart;