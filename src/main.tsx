import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShowTicketProvider } from "./context/ShowTicketProvider"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ShowTicketProvider>
    <App />
    </ShowTicketProvider>
  </StrictMode>,
)
