import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DocContextProvider} from './assets/context/DotorContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <DocContextProvider>
  <App />
  </DocContextProvider>
  
   
    
  </StrictMode>,
)
