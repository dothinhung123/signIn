import React from 'react'
import GoogleAuth from './GoogleAuth'
import {BrowserRouter,Route} from 'react-router-dom'
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Route exact path="/" component={GoogleAuth}></Route>
            </BrowserRouter>
        </div>
    )
}
export default App