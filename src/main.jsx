import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './home.css'
import './tailwind.css'
import './custom.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init(); // Initialize AOS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
