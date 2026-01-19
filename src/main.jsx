import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/restaurante-web">
      <App />
    </BrowserRouter>
  </StrictMode>
)