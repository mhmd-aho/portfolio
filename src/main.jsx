import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '/src/App.jsx';
import WelcomeLoading from '/src/welcomLoading';
import {Suspense } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<WelcomeLoading/>}>
        <App/>
      </Suspense>
    <WelcomeLoading/>
  </StrictMode>,
)
