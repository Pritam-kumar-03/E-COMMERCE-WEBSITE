import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home_Page from './landing_page/Home/home_Page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_Page />
  </StrictMode>,
)
