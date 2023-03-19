import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ColorModeContextProvider } from './components/ColorModeContext';
import { SnackbarProvider } from 'notistack';
import { MaterialDesignContent } from 'notistack';
import styled from '@emotion/styled';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { subscribersApi } from './components/services/subscribers';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#1D7912',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={1000}
      preventDuplicate
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      <ApiProvider api={subscribersApi}>
        <Provider store={store}>
          <ColorModeContextProvider>
            <RouterProvider router={router} />
          </ColorModeContextProvider>
        </Provider>
      </ApiProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
