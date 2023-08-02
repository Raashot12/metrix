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
  dataKeyTwo: string;
}

const AreaChatFull = ({ data, dataKey, height, dataKeyTwo }: AreaChartProp) => (
  <AreaChartWrapper>
    <ResponsiveContainer width="99%" height={height}>
      <AreaChart data={data} margin={{ top: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          ></linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis
          dataKey={dataKey}
          tickLine={false}
          dx={3}
          fontSize="14px"
          fontWeight={400}
          fontFamily="Inter"
          color="#0A0A0A"
        />
        <YAxis
          dataKey={dataKeyTwo}
          tickLine={false}
          dx={3}
          fontSize="14px"
          fontWeight={400}
          fontFamily="Inter"
          color="#0A0A0A"
        />
        <Tooltip
          contentStyle={{
            background: 'none',
            color: '#0A0A0A',
            border: 'none',
          }}
          labelStyle={{ display: 'none' }}
        />
        <Area
          type="basis"
          dataKey="₦"
          stroke="#EF2C5A"
          fill="rgba(239, 44, 90, .5)"
          style={{ color: 'black' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </AreaChartWrapper>
);

export default AreaChatFull;
