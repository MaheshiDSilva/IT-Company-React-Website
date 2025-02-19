import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dash from './component/dashboard.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Services from './component/Services.jsx'
import Contact from './component/Contact.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </StrictMode>,
)
