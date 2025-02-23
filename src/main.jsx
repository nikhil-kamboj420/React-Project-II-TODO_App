import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./components/Todo.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
