import * as React from 'react';
const IconOrders = ({ active }: { active: boolean }) => (
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
      d="M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3924 3.41534 15.9348L4.19338 9.89357C4.60528 7.66931 6.02404 6.81805 7.26889 6.81805H17.4474C18.7105 6.81805 20.0469 7.73339 20.5229 9.89357L21.3009 15.9348C21.8684 19.889 19.5801 21.5 16.5137 21.5Z"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.651 6.59839C16.651 4.21232 14.7167 2.27802 12.3307 2.27802V2.27802C11.1817 2.27315 10.0781 2.72618 9.26388 3.53694C8.44969 4.34769 7.99199 5.44938 7.992 6.59839H7.992"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.2963 11.1018H15.2506"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.46572 11.1018H9.41995"
      stroke={active ? 'white' : '#53545C'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconOrders;
