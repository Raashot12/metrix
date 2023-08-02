import { Global } from '@mantine/core';

const GlobalFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('/fonts/Poppins/Poppins-Black.ttf') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('/fonts/Poppins/Poppins-Medium.ttf') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('/fonts/Poppins/Poppins-Bold.ttf') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 600,
            fontDisplay: 'swap',
          },
        },
      ]}
    />
  );
};

export default GlobalFonts;
