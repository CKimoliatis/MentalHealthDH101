import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { impactData } from '../../data/chartData';
import './Charts.css';

const ImpactChart = () => {
  return (
    <div>
      <h3 className="chart-title">COVID-19 Impact on Different Life Areas</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={impactData}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="category" stroke="#9ca3af" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9ca3af" />
          <Radar 
            name="Impact Score (%)" 
            dataKey="value" 
            stroke="#06b6d4" 
            fill="#06b6d4" 
            fillOpacity={0.6}
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <p className="chart-caption">
        Academic performance and social connections most significantly affected
      </p>
    </div>
  );
};

export default ImpactChart;