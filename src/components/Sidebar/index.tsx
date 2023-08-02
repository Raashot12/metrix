import styled from '@emotion/styled';
import MetrixLogo from '../IconComponents/MetrixLogo';
import { Box, Button, Group, Stack, Text, Flex } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { appColor } from 'theme/appColor';
import IconDashboard from '../IconComponents/IconDashboard';
import IconHamburger from '../IconComponents/IconHamburger';
import IconOrders from '../IconComponents/IconOrders';
import IconCustomer from '../IconComponents/IconCustomer';
import IconInventory from '../IconComponents/IconInventory';
import IconConversation from '../IconComponents/IconConversation';
import IconSettings from '../IconComponents/IconSettings';
import IconMusic from '../IconComponents/IconMusic';
import IconLogout from '../IconComponents/IconLogout';
import IconGiftBox from '../IconComponents/IconGiftBox';
import IconForward from '../IconComponents/IconForward';

type SidebarProps = {
  isOpened: boolean;
  handleToggle: () => void;
  toggleMobile: () => void;
  mobileShow: boolean;
  handleMouseOpenSidebarClose: () => void;
  handleMouseOpenSidebarOpened: () => void;
};
type SidebarContainerProps = {
  isOpened: boolean;
  mobileShow: boolean;
};
const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${appColor.white};
  width: 296px;
  transition: width 0.5s;
  overflow: hidden;
  text-align: left;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 14px;
  height: 100vh;
  z-index: 999;
  flex-shrink: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  position: fixed;
  ${({ isOpened }) =>
    isOpened &&
    `width: 90px;
    padding-left: 16px;
       padding-right: 16px;
    .text-label{
      display: none;
    }
   @media (max-width: 768px) {
    width: 0px;
    padding: 0px;
  }
  }
  `}
  @media (max-width: 768px) {
    width: 0px;
    transition: width 0.2s;
    padding-left: 0px !important;
    padding-right: 0px !important;
    ${({ mobileShow }) =>
      mobileShow &&
      `width: 296px!important;
      display: flex;
      padding-left: 16px !important;
      padding-right: 16px !important;
      padding-top: 15px;
      transition: width 0.2s;

  }
  `}
  }
`;

const ButtonContainer = styled(Box as any)``;
const OverFlowBox = styled(Box as any)`
  ::-webkit-scrollbar {
    width: 7px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #0a0a0a;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ef2c5a;
  }
`;
const GroupContainer = styled(Box as any)<{ active: boolean }>`
  height: 'auto';
  background-color: none;
  color: ${appColor.sidebarTextColor} !important;
  ${({ active }) =>
    active &&
    `padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 12px;
    background-color: ${appColor.primary};
    color: ${appColor.white};
  div{
    color: ${appColor.white};
    }
  }
  `}
  &.hovering-state:hover {
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 12px;
    background-color: ${appColor.primary};
    color: ${appColor.white};
  }

  &.active {
    color: ${appColor.white};
    font-weight: 400;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 12px;
    background-color: ${appColor.primary};
    div {
      color: ${appColor.white};
    }
  }
`;
const HamburgerContainer = styled(Flex)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const LogoContainer = styled(Box as any)`
  display: none;
  @media (min-width: 768.1px) {
    display: block;
  }
`;

export default function Sidebar({
  isOpened,
  handleToggle,
  mobileShow,
  toggleMobile,
  handleMouseOpenSidebarOpened,
  handleMouseOpenSidebarClose,
}: SidebarProps) {
  const [itemHovered, setItemHovered] = useState<string | null>(null);
  const handleMouseHover = (param: string | null) => {
    setItemHovered(param);
  };

  const handleMouseOut = () => {
    setItemHovered(null);
  };

  const router = useRouter();
  return (
    <SidebarContainer
      isOpened={isOpened}
      mobileShow={mobileShow}
      onMouseEnter={handleMouseOpenSidebarClose}
      onMouseLeave={handleMouseOpenSidebarOpened}
    >
      <LogoContainer sx={{ flexShrink: 0 }}>
        <MetrixLogo full={!isOpened} />
      </LogoContainer>
      <HamburgerContainer onClick={toggleMobile}>
        <IconHamburger />
      </HamburgerContainer>
      <OverFlowBox
        mt={62}
        sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}
      >
        <Stack spacing={24} color="#0A0A0A">
          <GroupContainer
            sx={{ cursor: 'pointer' }}
            align="center"
            onMouseOver={() => handleMouseHover('Dashboard')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard')}
            className={
              router.pathname === '/dashboard' ? 'active' : 'not-active'
            }
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              {itemHovered === 'Dashboard' ||
              router.pathname === '/dashboard' ? (
                <IconDashboard />
              ) : (
                <IconDashboard />
              )}
              <Text
                fw={400}
                ff={'Inter, sans-serif'}
                className="text-label"
                fz={14}
              >
                Dashboard
              </Text>
            </Flex>
          </GroupContainer>
          <GroupContainer
            spacing={16}
            sx={{ cursor: 'pointer' }}
            align="center"
            onMouseOver={() => handleMouseHover('Orders')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard/orders')}
            active={itemHovered === 'Orders'}
            className={
              router.pathname === '/dashboard/orders' ? 'active' : 'not-active'
            }
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              <IconOrders
                active={
                  itemHovered === 'Orders' ||
                  router.pathname === '/dashboard/orders'
                }
              />
              <Text
                fw={400}
                fz={14}
                ff={'Inter, sans-serif'}
                className="text-label"
              >
                Orders
              </Text>
            </Flex>
          </GroupContainer>
          <GroupContainer
            spacing={16}
            sx={{ cursor: 'pointer' }}
            align="center"
            className={
              router.pathname === '/dashboard/customers'
                ? 'active'
                : 'not-active'
            }
            active={itemHovered === 'Customers'}
            onMouseOver={() => handleMouseHover('Customers')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard/customers')}
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              <IconCustomer
                active={
                  itemHovered === 'Customers' ||
                  router.pathname === '/dashboard/customers'
                }
              />
              <Text
                fw={400}
                fz={14}
                ff={'Inter, sans-serif'}
                className="text-label"
              >
                Customers
              </Text>
            </Flex>
          </GroupContainer>
          <GroupContainer
            sx={{ cursor: 'pointer' }}
            align="center"
            className={
              router.pathname === '/dashboard/inventory'
                ? 'active'
                : 'not-active'
            }
            active={itemHovered === 'Inventory'}
            onMouseOver={() => handleMouseHover('Inventory')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard/inventory')}
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              <IconInventory
                active={
                  itemHovered === 'Inventory' ||
                  router.pathname === '/dashboard/inventory'
                }
              />
              <Text
                fw={400}
                fz={14}
                ff={'Inter, sans-serif'}
                className="text-label"
              >
                Inventory
              </Text>
            </Flex>
          </GroupContainer>
          <GroupContainer
            spacing={11}
            sx={{ cursor: 'pointer' }}
            align="center"
            className={
              router.pathname === '/dashboard/conversations'
                ? 'active'
                : 'not-active'
            }
            active={itemHovered === 'Conversations'}
            onMouseOver={() => handleMouseHover('Conversations')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard/conversations')}
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              <IconConversation
                active={
                  itemHovered === 'Conversations' ||
                  router.pathname === '/dashboard/conversations'
                }
              />
              <Text
                fw={400}
                fz={14}
                ff={'Inter, sans-serif'}
                className="text-label"
              >
                Conversations
              </Text>
            </Flex>
          </GroupContainer>
          <GroupContainer
            spacing={14}
            sx={{ cursor: 'pointer' }}
            align="center"
            active={itemHovered === 'Settings'}
            className={
              router.pathname === '/dashboard/settings'
                ? 'active'
                : 'not-active'
            }
            onMouseOver={() => handleMouseHover('Settings')}
            onMouseOut={handleMouseOut}
            onClick={() => router.push('/dashboard/settings')}
          >
            <Flex
              align={'center'}
              justify={isOpened ? 'center' : ''}
              columnGap={16}
              pl={isOpened ? 0 : 16}
            >
              <IconSettings
                active={
                  itemHovered === 'Settings' ||
                  router.pathname === '/dashboard/settings'
                }
              />
              <Text
                fw={400}
                ff={'Inter, sans-serif'}
                fz={14}
                className="text-label"
              >
                Settings
              </Text>
            </Flex>
          </GroupContainer>
        </Stack>
      </OverFlowBox>
      <Stack spacing={14}>
        <ButtonContainer>
          {isOpened ? (
            <Flex
              sx={{
                borderRadius: '16px',
                cursor: 'pointer',
                background: 'rgba(94, 99, 102, 0.10)',
              }}
              w={'56px'}
              h={'48px'}
              align={'center'}
              justify={'center'}
            >
              <IconMusic />
            </Flex>
          ) : (
            <Button
              leftIcon={<IconMusic />}
              fullWidth
              sx={{
                borderRadius: '16px',
                background: 'rgba(94, 99, 102, 0.10)',
                '& .mantine-Button-label': {
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '15.6px',
                  fontStyle: 'normal',
                  color: '#0A0A0A',
                },
                '& .mantine-Button-inner': {
                  justifyContent: 'flex-start',
                },
                '&.mantine-UnstyledButton-root': {
                  paddingLeft: 16,
                },
              }}
            >
              Contact Support
            </Button>
          )}
        </ButtonContainer>
        <ButtonContainer>
          {isOpened ? (
            <Flex
              w={'100%'}
              bg={'rgba(255, 204, 145, 0.20)'}
              p={16}
              align={'center'}
              sx={{ borderRadius: 16 }}
              onClick={handleToggle}
            >
              <IconGiftBox />
            </Flex>
          ) : (
            <Box
              w={'100%'}
              bg={'rgba(255, 204, 145, 0.20)'}
              pt={11}
              pb={13}
              pl={20}
              sx={{ borderRadius: 16 }}
              onClick={handleToggle}
            >
              <Stack spacing={16}>
                <Flex columnGap={12} align={'center'}>
                  <IconGiftBox />
                  <Text
                    fw={400}
                    ff={'Inter, sans-serif'}
                    fz={14}
                    className="text-label"
                    color={appColor.textColor}
                  >
                    Free Gift Awaits You!
                  </Text>
                </Flex>{' '}
                <Flex align={'center'} columnGap={16}>
                  <Text
                    fw={400}
                    ff={'Inter, sans-serif'}
                    fz={12}
                    className="text-label"
                    color="#6E7079"
                  >
                    Upgrade your account
                  </Text>
                  <IconForward />
                </Flex>
              </Stack>
            </Box>
          )}
        </ButtonContainer>
      </Stack>
      <GroupContainer
        spacing={8}
        sx={{ cursor: 'pointer' }}
        align="center"
        onClick={() => router.push('/')}
        mt={34}
      >
        <Flex
          align={'center'}
          justify={isOpened ? 'center' : ''}
          columnGap={16}
          pl={isOpened ? 0 : 16}
        >
          <IconLogout />
          <Text
            fw={400}
            ff={'Inter, sans-serif'}
            className="text-label"
            color={appColor.red}
          >
            Logout
          </Text>
        </Flex>
      </GroupContainer>
    </SidebarContainer>
  );
}
