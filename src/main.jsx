import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-hrb8kz4pxif5w843.us.auth0.com"
  clientId="zwhN3e6tOEqne4prhhgWblStxW0YY11E"
  authorizationParams={{
    redirect_uri: window.location.origin,
   
  }}
  cachelocation='localStorage'
>

  <UserProvider>
   
   <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>

);
