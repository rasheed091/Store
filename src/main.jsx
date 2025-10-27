import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/poppins/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/pacifico/400.css';
import '@fontsource/montez';
import '@fontsource/pacifico';
import '@fontsource-variable/outfit';
import '@fontsource/berkshire-swash';
import '@fontsource/staatliches';
import '@fontsource-variable/josefin-sans';
import '@fontsource-variable/league-spartan';
import '@fontsource-variable/public-sans';
import '@fontsource/ubuntu';
import '@fontsource-variable/cabin';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  clientId: "AakSlugETa8N7wLyzp1H_FqINcqCLNjNRzUPEIpNwexl12133NVYHNvWK96GGvbiuN8c_LLCRkzbfVQY",
  currency: "USD",
  intent: "capture",
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </StrictMode>,
)
