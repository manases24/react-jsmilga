import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './redux/store.ts'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center' />
  </Provider>
)
