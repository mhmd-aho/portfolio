import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WelcomeLoading from '/src/welcomeLoading';
import {Suspense,lazy } from 'react';
const App = lazy(()=> import('/src/App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<WelcomeLoading/>}>
        <App/>
      </Suspense>
  </StrictMode>,
)
