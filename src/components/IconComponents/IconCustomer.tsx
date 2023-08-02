import * as React from 'react';
const IconCustomer = ({ active }: { active: boolean }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.59151 12.0198C7.16951 12.0198 5.20551 10.0568 5.20551 7.6348C5.20551 5.2128 7.16951 3.2498 9.59151 3.2498C12.0125 3.2498 13.9765 5.2128 13.9765 7.6348C13.9855 10.0478 12.0355 12.0108 9.62251 12.0198H9.59151Z"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4831 10.8816C18.0841 10.6566 19.3171 9.2826 19.3201 7.6196C19.3201 5.9806 18.1251 4.6206 16.5581 4.3636"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5954 14.7322C20.1464 14.9632 21.2294 15.5072 21.2294 16.6272C21.2294 17.3982 20.7194 17.8982 19.8954 18.2112"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconCustomer;
