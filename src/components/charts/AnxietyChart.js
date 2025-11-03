import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { anxietyCases } from '../../data/chartData';
import './Charts.css';

const AnxietyChart = () => {
  return (
    <div>
      <h3 className="chart-title">Diagnosed Anxiety Cases Timeline</h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={anxietyCases}>
          <defs>
            <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="period" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="cases" 
            stroke="#ef4444" 
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorCases)"
            name="Anxiety Cases (k)" 
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="chart-caption">
        Peak anxiety diagnoses occurred during mid-2020 and 2021
      </p>
    </div>
  );
};

export default AnxietyChart;