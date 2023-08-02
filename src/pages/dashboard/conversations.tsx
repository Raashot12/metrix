import IconSearch from '@/components/IconComponents/IconSearch';
import IconUserImage from '@/components/IconComponents/IconUserImage';
import MetrixDashboardWrapper from '@/components/layouts/MetrixDashboardWrapper';
import {
  Box,
  Flex,
  Grid,
  Group,
  Input,
  Stack,
  Text,
} from '@mantine/core';
import Head from 'next/head';
import React, { useState } from 'react';
import { appColor } from 'theme/appColor';

interface SearchParam {
  name: string;
}
type SearchType = {
  id: number;
  name: string;
  recent: string;
  time: string;
  long?: string | number;
  status: boolean;
};
const ConversationPage = () =>
{
  const [active, setActive] = useState(0)
  const [searchParam] = useState<Array<string>>([
    'name',
  ]);
   const [query, setQuery] = useState('');
  const handleUserMessage = (id: number) =>
  {
    setActive(id)
  }
   const arrayOfValue = Object.values(data);
   function search(items: SearchType[]) {
     return items.filter((item) => {
       return ([...searchParam] as const).some((value) => {
         return (
           item[value as keyof SearchParam]
             .toString()
             .toLowerCase()
             .indexOf(query.toLowerCase()) > -1
         );
       });
     });
   }
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setQuery(e.target.value);
   };
  return (
    <MetrixDashboardWrapper>
      <>
        <Head>
          <title>Metrix | Conversations</title>
          <meta name="description" content="Metrix dashboard" />
        </Head>
        <Flex justify={'space-between'} align={'center'}>
          <Text ff={'Inter'} fw={500}>
            Conversations with Customers
          </Text>
          <Flex
            px={16}
            align={'center'}
            justify={'center'}
            h={36}
            bg={'#5570F1'}
            fz={14}
            fw={400}
            ff={'Inter'}
            sx={{
              borderRadius: '12px',
              color: appColor.white,
              cursor: 'pointer',
            }}
          >
            New Message
          </Flex>
        </Flex>
        <Grid mt={20}>
          <Grid.Col lg={5}>
            <Box
              sx={{ background: appColor.white, borderRadius: 12 }}
              px={15}
              py={11}
            >
              <Flex align={'center'} justify={'space-between'}>
                <Text
                  ff={'Poppins, sans-serif'}
                  fw={500}
                  fz={20}
                  color="#2C2D33"
                >
                  Contacts{' '}
                </Text>
                <Text
                  color="#A6A8B1"
                  ff={'Poppins, sans-serif'}
                  fw={500}
                  fz={20}
                >
                  34
                </Text>
              </Flex>
              <Input
                mih={45}
                mt={16}
                mb={36}
                onChange={handleChange}
                query={query}
                sx={{
                  input: {
                    height: 45,
                  },
                }}
                icon={<IconSearch />}
                placeholder="Search"
              />
              {search(arrayOfValue).map((value) => {
                return (
                  <Box
                    py={12}
                    px={24}
                    bg={active === value.id ? '#F7F7FC' : 'white'}
                    key={value.id}
                    onClick={() => handleUserMessage(value.id)}
                    sx={{
                      borderRight:
                        active === value.id ? '4px solid #5570F1' : 'none',
                      borderBottom:
                        active === value.id ? 'none' : '1px solid #F1F3F9',
                      cursor: 'pointer',
                    }}
                  >
                    <Flex justify={'space-between'} align={'flex-start'}>
                      <Group noWrap>
                        <Box sx={{ position: 'relative' }}>
                          <IconUserImage />
                          <Box
                            pos={'absolute'}
                            right={0}
                            top={2}
                            sx={{
                              background: getStatusColor(value.status),
                              border: '2px solid white',
                              height: 12,
                              width: 12,
                              borderRadius: '50%',
                            }}
                          ></Box>
                        </Box>
                        <Stack spacing={12}>
                          <Text
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                          >
                            {value.name}
                          </Text>
                          <Text
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                            fw={400}
                            color="#8B8D97"
                          >
                            {value.recent}
                          </Text>
                        </Stack>
                      </Group>

                      <Stack spacing={16}>
                        <Flex
                          sx={{
                            fontFamily: 'Inter, sans-serif',
                            visibility:
                              value.long === '' ? 'hidden' : 'visible',
                          }}
                          fz={12}
                          px={7}
                          bg={'#FEF5EA'}
                          align={'center'}
                          justify={'center'}
                        >
                          {value.long}
                        </Flex>
                        <Text
                          sx={{ fontFamily: 'Inter, sans-serif' }}
                          fz={12}
                          fw={400}
                          color="#8B8D97"
                        >
                          {value.time}
                        </Text>
                      </Stack>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Grid.Col>
          <Grid.Col lg={7}>
            {' '}
            <Box
              sx={{ background: appColor.white, borderRadius: 12 }}
              px={15}
              py={11}
            >
              daf
            </Box>
          </Grid.Col>
        </Grid>
      </>
    </MetrixDashboardWrapper>
  );
};

export default ConversationPage;

const getStatusColor = (status: boolean) => {
  if (status == true) {
    return '#5570F1';
  }
  return '#C4CAE8';
};
const data = [
  {
    id: 1,
    name: 'Jane Doe',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    long: 'New',
    status: true,
  },
  {
    id: 2,
    name: 'Janet Adebayo',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    long: 'New',
    status: false,
  },
  {
    id: 3,
    name: 'Kunle Adekunle',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    status: false,
  },
  {
    id: 4,
    name: 'Jane Doe',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    long: 2,
    status: true,
  },
  {
    id: 5,
    name: 'Janet Adebayo',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    long: 'New',
    status: true,
  },
  {
    id: 6,
    name: 'Kunle Adekunle',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    status: false,
    long: '',
  },
  {
    id: 7,
    name: 'Kunle Adekunle',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    status: false,
    long: '',
  },
  {
    id: 8,
    name: 'Kunle Adekunle',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    status: false,
    long: '',
  },
  {
    id: 9,
    name: 'Kunle Adekunle',
    recent: 'Hi, i want make enquiries about yo...',
    time: '12:55 am',
    status: true,
    long: '',
  },
];
