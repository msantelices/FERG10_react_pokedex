import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Pokemon from '../views/Pokemon'
import Team from '../views/Team'
import NotFound from '../views/NotFound'

const Router = ()=> {
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/pokemon/:name' element={ <Pokemon /> } />
            <Route path='/team' element={ <Team /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}

export default Router