/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { List, Flex, Button, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface IPaginationProps {
  idToClampTo?: string;
  data?: any[];
  pagination: any[];
  // eslint-disable-next-line no-unused-vars
  prevPage: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  nextPage: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  changePage: (page: number, e?: any) => void;
}

// the id is used when the page is changed it scrolls back to the top of that section in the parent
const Pagination: FC<IPaginationProps> = ({
  idToClampTo = '',
  data,
  pagination,
  prevPage,
  nextPage,
  changePage,
}) => {
  const router = useRouter();

  // when data changes navigate to page 1
  useEffect(() => {
    changePage(1);
  }, [data]);

  return (
    <Flex justify={'flex-start'} align="center" columnGap={10}>
      {/* left arrow button */}
      <Button
        display={pagination.length === 0 ? 'none' : 'flex'}
        onClick={(e: any) => {
          prevPage(e);
          const pathAndSlug = router.asPath.split('#')[0];
          const newPath = `${pathAndSlug}#${idToClampTo}`;
          // eslint-disable-next-line no-unused-expressions
          idToClampTo ? window.location.replace(newPath) : '';
        }}
        // // check if on first page

        bg={'none'}
        sx={{
          ':hover': {
            backgroundColor: 'none',
          },
          ':active': {
            backgroundColor: 'none',
          },
          '.mantine-Button-label': {
            fontSize: 14,
          },
          '&.mantine-Button-root': {
            height: 'auto',
            paddingLeft: 5,
            paddingRight: 5,
          },
        }}
      >
        <MdKeyboardArrowLeft color="#A39D9E" height={8} width={4} />
      </Button>

      <List
        display="flex"
        sx={{ columnGap: 8, alignItems: 'center', justifyContent: 'center' }}
      >
        {pagination.map((page) => {
          if (!page.ellipsis) {
            return (
              <React.Fragment key={page.id}>
                {/* main numbers */}
                <Button
                  onClick={(e: any) => {
                    changePage(page.id, e);
                    // eslint-disable-next-line no-unused-expressions
                    const pathAndSlug = router.asPath.split('#')[0];
                    const newPath = `${pathAndSlug}#${idToClampTo}`;
                    // eslint-disable-next-line no-unused-expressions
                    idToClampTo ? window.location.replace(newPath) : '';
                  }}
                  fz={14}
                  bg={page.current ? '#F0F0F0' : 'transparent'}
                  sx={{
                    ':hover': {
                      backgroundColor: page.current ? '#F0F0F0' : '',
                      color: '#0A0A0A',
                    },
                    ':active': {
                      background: '#F0F0F0',

                      color: '#0A0A0A',
                    },

                    '.mantine-Button-label': {
                      fontSize: 14,
                    },
                    '&.mantine-Button-root': {
                      color: '#0A0A0A',
                      height: '25px',

                      '&:hover': {
                        background: '#F0F0F0',
                        color: '#0A0A0A',
                        border: 'none',
                      },
                    },
                  }}
                  fw={400}
                >
                  {page.id}
                </Button>
              </React.Fragment>
            );
          }
          return (
            <List.Item
              key={page.id}
              sx={{
                listStyleType: 'none',
                '&:hover': {
                  background: 'none !important',
                },
              }}
            >
              {/* Ellipsis */}
              <Button
                bg="transparent"
                fw={400}
                sx={{
                  '.mantine-Button-label': {
                    fontSize: 14,
                  },
                  '&.mantine-Button-root': {
                    height: 36,
                    color: '#051438',
                    '&:hover': {
                      background: 'none !important',
                    },
                  },
                }}
              >
                &hellip;
              </Button>
            </List.Item>
          );
        })}
      </List>

      {/* right arrow button */}
      <Button
        display={pagination.length === 0 ? 'none' : 'flex'}
        onClick={(e: any) => {
          nextPage(e);
          // eslint-disable-next-line no-unused-expressions
          const pathAndSlug = router.asPath.split('#')[0];
          const newPath = `${pathAndSlug}#${idToClampTo}`;
          // eslint-disable-next-line no-unused-expressions
          idToClampTo ? window.location.replace(newPath) : '';
        }}
        // check if on last page
        bg={'none'}
        sx={{
          ':hover': {
            backgroundColor: 'none',
          },
          ':active': {
            backgroundColor: 'none',
          },
          '.mantine-Button-label': {
            fontSize: 14,
          },
          '&.mantine-Button-root': {
            height: 'auto',
            paddingLeft: 5,
            paddingRight: 5,
          },
        }}
      >
        <MdKeyboardArrowRight color="#A39D9E" height={8} width={4} />
      </Button>
    </Flex>
  );
};

export default Pagination;
