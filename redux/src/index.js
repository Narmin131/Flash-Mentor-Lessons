import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { WishlistProvider } from 'react-use-wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </WishlistProvider>

  </React.StrictMode>
);

