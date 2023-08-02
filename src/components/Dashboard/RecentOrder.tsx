import { Flex, Box, Text, Stack, Group, Divider } from '@mantine/core';
import React from 'react';
import { appColor } from 'theme/appColor';
import IphoneGold from '../IconComponents/IphoneGold';
import IphoneBlack from '../IconComponents/IphoneBlack';

const RecentOrder = () => {
  return (
    <Box sx={{ background: appColor.white, borderRadius: 12 }} px={15} py={11}>
      <Flex align={'center'} justify={'space-between'}>
        <Text color="#45464E" ff={'Inter'} fw={500}>
          Recent Orders
        </Text>
      </Flex>
      <Stack mt={32}>
        {data.map((value) => {
          return (
            <Box>
              <Flex mb={12} align="self-start" justify={'space-between'}>
                <Group>
                  <Flex>{svgToReturn(value.image)}</Flex>
                  <Flex>
                    <Stack spacing={6}>
                      <Text fz={14} color="#45464E">
                        {value.name}
                      </Text>
                      <Text fz={14} color="#33343A" fw={500} ff={'Inter'}>
                        {value.price}
                      </Text>
                    </Stack>
                  </Flex>
                </Group>
                <Box>
                  <Stack spacing={8}>
                    <Text fz={12} color="#A6A8B1">
                      {value.date}
                    </Text>
                    <Text
                      fz={12}
                      color="#33343A"
                      fw={400}
                      ff={'Inter'}
                      px={15}
                      sx={{
                        backgroundColor: getStatusColor(value.status)
                          ?.backgroundColor,
                        borderRadius: '8px',
                        color: getStatusColor(value.status)?.textColor,
                      }}
                    >
                      {value.status}
                    </Text>
                  </Stack>
                </Box>
              </Flex>
              <Divider color="#F1F3F9" />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default RecentOrder;

const data = [
  {
    id: 1,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Pending',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 2,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Completed',
    price: '₦730,000.00 x 1',
    image: 'Black',
  },
  {
    id: 3,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Completed',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 4,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Completed',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 5,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Completed',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 6,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Completed',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 7,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Pending',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 8,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Pending',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
  {
    id: 9,
    name: 'iPhone 13',
    date: '12 Sept 2022',
    status: 'Pending',
    price: '₦730,000.00 x 1',
    image: 'Gold',
  },
];

const svgToReturn = (type: string) => {
  if (type === 'Gold') {
    return <IphoneGold />;
  }
  if (type === 'Black') {
    return <IphoneBlack />;
  }
  return <IphoneBlack />;
};
const getStatusColor = (type: string) => {
  if (type === 'Pending') {
    return {
      textColor: '#CC5F5F',
      backgroundColor: 'rgba(245, 126, 119, 0.12)',
    };
  }
  if (type === 'Completed') {
    return {
      textColor: '#519C66',
      backgroundColor: 'rgba(50, 147, 111, 0.12)',
    };
  }
};
