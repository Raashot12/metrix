import MetrixDashboardWrapper from '@/components/layouts/MetrixDashboardWrapper';
import { Box } from '@mantine/core';
import Head from 'next/head';
import React from 'react';

const OrderPage = () => {
  return (
    <MetrixDashboardWrapper>
      <>
        <Head>
          MetrixDashboardWrapper
          <title>Metrix | Orders</title>
          <meta name="description" content="Metrix dashboard" />
        </Head>
        <Box mt={168} fw={600}>
          Coming Soon!
        </Box>
      </>
    </MetrixDashboardWrapper>
  );
};

export default OrderPage;
