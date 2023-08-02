import { Box, Flex, Grid, Group, Select, Stack, Text } from '@mantine/core';
import React from 'react';
import { appColor } from 'theme/appColor';
import IconGraph from '../IconComponents/IconGraph';
import IconInput from '../IconComponents/IconInput';
import IconUser from '../IconComponents/IconUser';
import IconBasket from '../IconComponents/IconBasket';
import IconFolder from '../IconComponents/IconFolder';
import IconCart from '../IconComponents/IconCart';
import IconCirclePurple from '../IconComponents/IconCircle';
import IconCirleV1 from '../IconComponents/IconCirleV1';
import IconCircleV2 from '../IconComponents/IconCircleV2';
import GraphLineChart from '../IconComponents/GraphLineChart';
import GraphCirle from '../IconComponents/GraphCirle';
import RecentOrder from './RecentOrder';

const LandingDashboard = (props: { isOpened?: boolean }) => {
  console.log(props);
  return (
    <>
      <Grid gutter={20}>
        <Grid.Col sm={6} lg={3}>
          <Box
            sx={{ background: appColor.white, borderRadius: 12 }}
            px={15}
            py={11}
          >
            <Flex justify={'space-between'}>
              <Flex
                h={36}
                w={36}
                bg={'rgba(85, 112, 241, 0.12)'}
                sx={{ borderRadius: 8 }}
                align={'center'}
                justify={'center'}
              >
                <IconGraph />
              </Flex>

              <Box
                w={{
                  base: '34%',
                  sm: '35%',
                  lg: props.isOpened ? '39%' : '49%',
                }}
              >
                <Select
                  data={['This week', 'Last week', 'This month', 'Last year']}
                  defaultValue={'This week'}
                  sx={{
                    '.mantine-Input-input': {
                      border: 'none',
                      outline: 'none',
                      height: '36px',
                      color: '#BEC0CA',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                    },
                  }}
                  rightSection={<IconInput />}
                />
              </Box>
            </Flex>
            <Box mt={32}>
              <Group grow>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Sales
                  </Text>
                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    ₦4,000,000.00
                  </Text>
                </Stack>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Volume
                  </Text>

                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    450
                    <Text
                      component="span"
                      color="#519C66"
                      fz={12}
                      ff={'Inter, sans-serif'}
                      fw={400}
                      pos={'relative'}
                      top={-3}
                      ml={8}
                    >
                      +20.00%
                    </Text>
                  </Text>
                </Stack>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <Box
            sx={{ background: appColor.white, borderRadius: 12 }}
            px={15}
            py={11}
          >
            <Flex justify={'space-between'}>
              <Flex
                h={36}
                w={36}
                bg={'rgba(255, 204, 145, 0.16)'}
                sx={{ borderRadius: 8 }}
                align={'center'}
                justify={'center'}
              >
                <IconUser />
              </Flex>

              <Box
                w={{
                  base: '34%',
                  sm: '35%',
                  lg: props.isOpened ? '39%' : '49%',
                }}
              >
                <Select
                  data={['This week', 'Last week', 'This month', 'Last year']}
                  defaultValue={'This week'}
                  sx={{
                    '.mantine-Input-input': {
                      border: 'none',
                      outline: 'none',
                      height: '36px',
                      color: '#BEC0CA',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                    },
                  }}
                  rightSection={<IconInput />}
                />
              </Box>
            </Flex>
            <Box mt={32}>
              <Group grow>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Customers
                  </Text>
                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    1,250
                    <Text
                      component="span"
                      color="#519C66"
                      fz={12}
                      ff={'Inter, sans-serif'}
                      fw={400}
                      pos={'relative'}
                      top={-3}
                      ml={8}
                    >
                      +15.80%
                    </Text>
                  </Text>
                </Stack>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Active
                  </Text>

                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    1,180
                    <Text
                      component="span"
                      color="#519C66"
                      fz={12}
                      ff={'Inter, sans-serif'}
                      fw={400}
                      pos={'relative'}
                      top={-3}
                      ml={8}
                    >
                      85%
                    </Text>
                  </Text>
                </Stack>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col lg={6}>
          {' '}
          <Box
            sx={{ background: appColor.white, borderRadius: 8 }}
            px={15}
            py={11}
          >
            <Flex justify={'space-between'}>
              <IconBasket />
              <Box
                w={{
                  base: '34%',
                  sm: '17%',
                  lg: props.isOpened ? '18%' : '22%',
                }}
              >
                <Select
                  data={['This week', 'Last week', 'This month', 'Last year']}
                  defaultValue={'This week'}
                  sx={{
                    '.mantine-Input-input': {
                      border: 'none',
                      outline: 'none',
                      height: '36px',
                      color: '#BEC0CA',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                    },
                  }}
                  rightSection={<IconInput />}
                />
              </Box>
            </Flex>
            <Box mt={32}>
              <Group grow>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    All Orders
                  </Text>
                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    450
                  </Text>
                </Stack>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Pending
                  </Text>

                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    5
                  </Text>
                </Stack>
                <Stack spacing={8}>
                  <Text
                    color="#8B8D97"
                    sx={{ fontFamily: 'Inter, sans-serif' }}
                    fz={14}
                  >
                    Completed
                  </Text>

                  <Text
                    color="#45464E"
                    fz={20}
                    ff={'Poppins, sans-serif'}
                    fw={500}
                  >
                    445
                  </Text>
                </Stack>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      <Grid mt={20}>
        <Grid.Col lg={8}>
          <Grid>
            <Grid.Col lg={6}>
              {' '}
              <Box
                sx={{ background: appColor.white, borderRadius: 12 }}
                px={15}
                py={11}
              >
                <Flex align={'center'} justify={'space-between'}>
                  <Text color="#45464E" ff={'Inter'} fw={500}>
                    Marketing
                  </Text>
                  <Box
                    w={{
                      base: '34%',
                      sm: '35%',
                      lg: props.isOpened ? '28%' : '35%',
                    }}
                  >
                    <Select
                      data={[
                        'This week',
                        'Last week',
                        'This month',
                        'Last year',
                      ]}
                      defaultValue={'This week'}
                      sx={{
                        '.mantine-Input-input': {
                          border: 'none',
                          outline: 'none',
                          height: '36px',
                          color: '#BEC0CA',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                        },
                      }}
                      rightSection={<IconInput />}
                    />
                  </Box>
                </Flex>
                <Box mt={12} mb={18}>
                  <Group grow>
                    <Flex align={'center'} columnGap={8}>
                      <IconCirclePurple />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Acquisition
                      </Text>
                    </Flex>
                    <Flex align={'center'} columnGap={8}>
                      <IconCirleV1 />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Purchase
                      </Text>
                    </Flex>
                    <Flex align={'center'} columnGap={8}>
                      <IconCircleV2 />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Retention
                      </Text>
                    </Flex>
                  </Group>
                </Box>
                <GraphCirle />
              </Box>
            </Grid.Col>
            <Grid.Col lg={6}>
              <Grid>
                <Grid.Col sm={6} lg={12}>
                  <Box
                    sx={{ background: '#5570F1', borderRadius: 12 }}
                    px={15}
                    py={11}
                  >
                    <Flex justify={'space-between'}>
                      <IconFolder />
                    </Flex>
                    <Box mt={32}>
                      <Group grow>
                        <Stack spacing={8}>
                          <Text
                            color="#FFF"
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                          >
                            All Products
                          </Text>
                          <Text
                            color="#FFF"
                            fz={20}
                            ff={'Poppins, sans-serif'}
                            fw={500}
                          >
                            45
                          </Text>
                        </Stack>
                        <Stack spacing={8}>
                          <Text
                            color="#FFF"
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                          >
                            Active
                          </Text>

                          <Text
                            color="#FFF"
                            fz={20}
                            ff={'Poppins, sans-serif'}
                            fw={500}
                          >
                            32
                            <Text
                              component="span"
                              color="#FFF"
                              fz={12}
                              ff={'Inter, sans-serif'}
                              fw={400}
                              pos={'relative'}
                              top={-3}
                              ml={8}
                            >
                              +24%
                            </Text>
                          </Text>
                        </Stack>
                      </Group>
                    </Box>
                  </Box>
                </Grid.Col>
                <Grid.Col sm={6} lg={12}>
                  {' '}
                  <Box
                    sx={{ background: appColor.white, borderRadius: 12 }}
                    px={15}
                    py={11}
                  >
                    <Flex justify={'space-between'}>
                      <IconCart />

                      <Box
                        w={{
                          base: '34%',
                          sm: '35%',
                          lg: props.isOpened ? '29%' : '32%',
                        }}
                      >
                        <Select
                          data={[
                            'This week',
                            'Last week',
                            'This month',
                            'Last year',
                          ]}
                          defaultValue={'This week'}
                          sx={{
                            '.mantine-Input-input': {
                              border: 'none',
                              outline: 'none',
                              height: '36px',
                              color: '#BEC0CA',
                              fontWeight: 400,
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '12px',
                            },
                          }}
                          rightSection={<IconInput />}
                        />
                      </Box>
                    </Flex>
                    <Box mt={32}>
                      <Group grow>
                        <Stack spacing={8}>
                          <Text
                            color="#CC5F5F"
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                          >
                            Abandoned Cart
                          </Text>
                          <Text
                            color="#45464E"
                            fz={20}
                            ff={'Poppins, sans-serif'}
                            fw={500}
                          >
                            20%
                            <Text
                              component="span"
                              color="#519C66"
                              fz={12}
                              ff={'Inter, sans-serif'}
                              fw={400}
                              pos={'relative'}
                              top={-3}
                              ml={8}
                            >
                              +0.00%
                            </Text>
                          </Text>
                        </Stack>
                        <Stack spacing={8}>
                          <Text
                            color="#8B8D97"
                            sx={{ fontFamily: 'Inter, sans-serif' }}
                            fz={14}
                          >
                            Customers
                          </Text>

                          <Text
                            color="#45464E"
                            fz={20}
                            ff={'Poppins, sans-serif'}
                            fw={500}
                          >
                            30
                          </Text>
                        </Stack>
                      </Group>
                    </Box>
                  </Box>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid mt={18}>
            <Grid.Col>
              <Box
                sx={{ background: appColor.white, borderRadius: 12 }}
                px={15}
                py={11}
              >
                <Flex align={'center'} justify={'space-between'}>
                  <Group
                    spacing={21}
                    w={{ base: '50%', lg: props.isOpened ? '23%' : '25%' }}
                    noWrap
                  >
                    <Text color="#45464E" ff={'Inter'} fw={500}>
                      Summary
                    </Text>
                    <Select
                      data={['Sales']}
                      defaultValue={'Sales'}
                      sx={{
                        '.mantine-Input-input': {
                          border: 'none',
                          background: 'rgba(85, 112, 241, 0.08)',
                          outline: 'none',
                          height: '36px',
                          color: '#5570F1',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                        },
                      }}
                      rightSection={<IconInput color="#5570F1" />}
                    />
                  </Group>
                  <Box
                    w={{
                      base: '34%',
                      sm: '35%',
                      lg: props.isOpened ? '28%' : '35%',
                    }}
                  >
                    <Select
                      data={[
                        'This week',
                        'Last week',
                        'This month',
                        'Last year',
                      ]}
                      defaultValue={'This week'}
                      sx={{
                        '.mantine-Input-input': {
                          border: 'none',
                          outline: 'none',
                          height: '36px',
                          color: '#BEC0CA',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                        },
                      }}
                      rightSection={<IconInput />}
                    />
                  </Box>
                </Flex>
                <Box mt={12} mb={36}>
                  <Group grow>
                    <Flex align={'center'} columnGap={8}>
                      <IconCirclePurple />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Acquisition
                      </Text>
                    </Flex>
                    <Flex align={'center'} columnGap={8}>
                      <IconCirleV1 />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Purchase
                      </Text>
                    </Flex>
                    <Flex align={'center'} columnGap={8}>
                      <IconCircleV2 />
                      <Text
                        fz={11}
                        color="#A6A8B1"
                        sx={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Retention
                      </Text>
                    </Flex>
                  </Group>
                </Box>
                <GraphLineChart />
              </Box>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col lg={4}>
          <RecentOrder />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default LandingDashboard;
