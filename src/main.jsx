import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'


import AppTestStyles from './AppTestStyles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTestStyles />
  </StrictMode>,
)
