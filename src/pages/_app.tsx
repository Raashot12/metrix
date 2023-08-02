import '../font.css';
import type { ReactElement, ReactNode } from 'react';
import { useState, useEffect, useCallback } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { buttonStyles, checkboxStyles, defaultFonts, inputStyles } from 'theme';
import { LoaderAnimation } from 'components/Shared/ScreenLoader';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '../state/store';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [loading, setLoading] = useState(true);
  const getLayout = Component.getLayout ?? ((page) => page);
  const handlePageScroll = useCallback(() => {
    setTimeout(() => {
      if (typeof window !== undefined && window.location.hash) {
        const pageSection = document.getElementById(
          window.location.hash.substring(1)
        );
        if (pageSection && pageSection.offsetTop) {
          window.scrollTo({
            top: pageSection.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  }, []);
  useEffect(() => {
    setLoading(false);
    handlePageScroll();
  }, [handlePageScroll]);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
    handlePageScroll();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            black: '#051438',
            colors: {
              brand: ['#020217', '#060746', '#0B0C7D'],
            },
            primaryColor: 'brand',
            primaryShade: 2,
            defaultRadius: 'md',
            fontFamily: defaultFonts,
            headings: {
              fontFamily: defaultFonts,
              sizes: {
                h2: { fontWeight: 700, fontSize: 24, lineHeight: 1.35 },
                h3: { fontWeight: 600, fontSize: 18, lineHeight: 1.25 },
              },
            },
            components: {
              Input: {
                styles: () => ({
                  input: inputStyles.input,
                  label: inputStyles.label,
                }),
              },
              InputWrapper: {
                styles: () => ({
                  label: inputStyles.label,
                }),
              },
              PasswordInput: {
                styles: () => ({
                  innerInput: inputStyles.input,
                }),
              },
              Button: {
                styles: () => buttonStyles,
              },
              Checkbox: {
                styles: () => checkboxStyles,
              },
            },
          }}
        >
          {loading ? (
            <LoaderAnimation />
          ) : (
            <>{getLayout(<Component {...pageProps} />)}</>
          )}
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}
