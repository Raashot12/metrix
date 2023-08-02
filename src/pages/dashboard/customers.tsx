import MetrixDashboardWrapper from '@/components/layouts/MetrixDashboardWrapper';
import { Box } from '@mantine/core';
import Head from 'next/head';
import React from 'react';

const CustomersPage = () => {
  return (
    <>
      <Head>
        <title>Metrix | Customers</title>
        <meta name="description" content="Metrix dashboard" />
      </Head>
      <MetrixDashboardWrapper>
        <Box mt={168} fw={600}>
          Coming Soon!
        </Box>
      </MetrixDashboardWrapper>
    </>
  );
};

export default CustomersPage;
