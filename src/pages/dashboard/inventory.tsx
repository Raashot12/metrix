import MetrixDashboardWrapper from '@/components/layouts/MetrixDashboardWrapper';
import { Box } from '@mantine/core';
import Head from 'next/head';
import React from 'react';

const InventoryPage = () => {
  return (
    <MetrixDashboardWrapper>
      <>
        {' '}
        <Head>
          <title>Metrix | Inventory</title>
          <meta name="description" content="Metrix dashboard" />
        </Head>
        <Box fw={600}>Coming Soon!</Box>
      </>
    </MetrixDashboardWrapper>
  );
};

export default InventoryPage;
