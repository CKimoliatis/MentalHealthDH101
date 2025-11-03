import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { supportData } from '../../data/chartData';
import './Charts.css';

const SupportChart = () => {
  return (
    <div>
      <h3 className="chart-title">Mental Health Support Resource Usage</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={supportData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {supportData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <p className="chart-caption">
        Distribution of support resources accessed by students during pandemic
      </p>
    </div>
  );
};

export default SupportChart;