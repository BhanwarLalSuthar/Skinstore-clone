import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider} from "./components/ui/provider.jsx";
import App from './App.jsx';
import theme from './styles/theme.js';
import { ProductsProvider } from './components/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider theme={theme}>
     <ProductsProvider>

        <App />
     </ProductsProvider>
  
    </Provider>
  </StrictMode>
);

