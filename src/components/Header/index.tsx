import styled from '@emotion/styled';
import { Box, Flex, Text, Image } from '@mantine/core';
import IconHamburger from '../IconComponents/IconHamburger';
import { appColor } from 'theme/appColor';
import IconArrowDown from '../IconComponents/IconArrowDown';
import IconBell from '../IconComponents/IconBell';
import { useMediaQuery } from '@mantine/hooks';
import IconHouse from '../IconComponents/IconHouse';

const HeaderContainer = styled(Box as any)`
  height: 60px;
  padding-right: 38px;
  border-bottom: 1px solid #ededed;
  background-color: #ffff;
  column-gap: 22px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const HeaderBg = styled(Box as any)`
  display: flex;
  height: inherit;
  align-items: center;
  border-bottom: 1px solid #ededed;
  background-color: #ffff;
  column-gap: 22px;
  width: inherit;
`;
const HeaderHouse = styled(Box as any)`
  padding-right: 38px;

  background-color: #ffff;
  column-gap: 22px;
  width: 100%;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 99;
  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    top: 60px;
  }
`;
const HamburgerContainer = styled(Flex)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export function truncateText(
  text: string,
  maxLength: number,
  mediaQuery: boolean
) {
  if (mediaQuery || text.length > maxLength) {
    if (text.length > maxLength) {
      const truncatedText = `${text.slice(0, maxLength)}...`;
      return truncatedText;
    }
  }
  return text;
}
export default function Header({
  toggleMobile,
  isOpened,
}: {
  toggleMobile: () => void;
  isOpened: boolean;
}) {
  const isMobile = useMediaQuery('(max-width: 40em)');
  return (
    <>
      <HeaderContainer>
        <HeaderBg>
          <HamburgerContainer align={'center'} onClick={toggleMobile}>
            <IconHamburger />
          </HamburgerContainer>
          <Flex
            align={'center'}
            columnGap={22}
            pl={{ md: isOpened ? 107 : 317 }}
          >
            <Flex>
              <Text
                fw={500}
                fz={20}
                ff={'Poppins, sans-serif'}
                color={appColor.textColorGrayBlack}
              >
                Dashboard
              </Text>
            </Flex>
          </Flex>
          <Flex justify={'flex-end'} w={'100%'} align={'center'} columnGap={20}>
            <Flex
              align={'center'}
              columnGap={20}
              py={5}
              px={12}
              bg={'#FEF5EA'}
              sx={{ borderRadius: '8px', cursor:"pointer" }}
            >
              <Text fz={14} fw={400} ff={'Inter, sans-serif'}>
                {truncateText('Nanny’s Shop', isMobile ? 5 : 33, isMobile)}
              </Text>
              <IconArrowDown />
            </Flex>
            <IconBell />
            <Image
              src="https://res.cloudinary.com/rashot/image/upload/v1690782765/profile_1_txfvkj.png"
              width={32}
              h={32}
              sx={{
                img: {
                  borderRadius: '8px',
                },
              }}
            />
          </Flex>
        </HeaderBg>
      </HeaderContainer>
      <HeaderHouse py={4}>
        <Flex align={'flex-start'} pl={{ md: isOpened ? 107 : 317 }}>
          <IconHouse />
        </Flex>
      </HeaderHouse>
    </>
  );
}
