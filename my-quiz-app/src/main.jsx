import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
// import App from './App.jsx'
import App from './components/App/index'

const uniqueId = 'content-wrapper';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)
