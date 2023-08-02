/* eslint-disable linebreak-style */
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  CartesianGrid,
} from 'recharts';
import styled from '@emotion/styled';

const AreaChartWrapper = styled.div`
  margin-bottom: 15px;
  & .recharts-wrapper {
    width: 100% !important;
    z-index: 0;
  }

  & .recharts-cartesian-axis-tick-value {
    font-size: 12px;
    color: #7a90c2;
    font-weight: 700;
  }
`;

interface AreaChartProp {
  data: any;
  dataKey: string;
  height?: number;
}

const AreaChat = ({ data, dataKey, height }: AreaChartProp) => (
  <AreaChartWrapper>
    <ResponsiveContainer width="99%" height={height}>
      <AreaChart data={data} margin={{ top: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0.114583" stopColor="rgba(239, 44, 90, .7)" />
            <stop
              offset="1"
              stopColor="llinear-gradient(0deg, #EF2C5A -435.62%, rgba(239, 44, 90, 0) 93.15%)"
              stopOpacity={0}
              style={{ transform: 'matrix(1, 0, 0, -1, 0, 0)' }}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tickLine={false} dx={3} fontSize="12px" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#EF2C5A"
          strokeWidth={1}
          fillOpacity={4}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </AreaChartWrapper>
);

export default AreaChat;
