import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './Style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter basename="/restaurante-web">
      <App />
    </HashRouter>
  </StrictMode>
)