import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: #faf5f8;
`;

const Content = styled.div<{ isOpened: boolean; mobileShow: boolean }>`
  flex: 1;
  width: 100%;
  text-align: left;
  position: relative;
  margin-left: ${({ isOpened }) => (isOpened ? '90px' : `296px`)};
  overflow-x: hidden;
  overflow-y: hidden;
  @media (max-width: 768px) {
    margin-left: 0 !important;
  }
`;

const PageContainer = styled(Box as any)`
  padding-left: 25px;
  padding-right: 25px;
  min-height: 100vh;
  flex: 1;
  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MetrixDashboardWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isOpened, setOpened] = useState(false);
  const [mobileShow, setMobile] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };
  const largeScreen = useMediaQuery('(max-width: 768px)');
  const toggleMobile = () => {
    setMobile((prev) => !prev);
  };
  const handleMouseOpenSidebarClose = () => {
    if (!largeScreen) {
      setOpened(false);
    }
  };
  const handleMouseOpenSidebarOpened = () => {
    if (!largeScreen) {
      setOpened(true);
    }
  };
  const someData = {
    isOpened: isOpened,
    mobileShow: mobileShow,
  };
  
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <Sidebar
          isOpened={isOpened}
          handleToggle={toggleDrawer}
          mobileShow={mobileShow}
          toggleMobile={toggleMobile}
          handleMouseOpenSidebarClose={handleMouseOpenSidebarClose}
          handleMouseOpenSidebarOpened={handleMouseOpenSidebarOpened}
        />
        <Header toggleMobile={toggleMobile} isOpened={isOpened} />
        <Content isOpened={isOpened} mobileShow={mobileShow}>
          <PageContainer mt={118}>
            {React.cloneElement(children, {isOpened: isOpened})}
          </PageContainer>
        </Content>
      </Box>
    </Container>
  );
};

export default MetrixDashboardWrapper;
