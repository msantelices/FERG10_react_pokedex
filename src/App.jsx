import './assets/App.css'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import GlobalProvider from './context/GlobalContext'
import Router from './router/Router'

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
