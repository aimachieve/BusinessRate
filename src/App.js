// routes
import React from 'react'
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
// import Settings from './components/settings';
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import {CartProvider} from './contexts/CartContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          <CartProvider>
            {/* <Settings /> */}
            <ScrollToTop />
            <Router />
          </CartProvider>
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig >
  );
}
