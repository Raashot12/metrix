import * as React from 'react';
const IconInput = ({ color = '#BEC0CA' }:{color?: string}) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <path
      d="M4 6L8 10L12 6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconInput;
