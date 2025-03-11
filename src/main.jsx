import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './Redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Toaster/>
    </Provider>
  </BrowserRouter>
)
