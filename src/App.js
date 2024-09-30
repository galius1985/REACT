import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home.js"
import Comedy from "./pages/Comedy.js"
import Serials from "./pages/Serials.js"
import Error from "./pages/Error.js"
import SharedLayout from "./pages/SharedLayout.js"

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route element={ <SharedLayout /> }>
      <Route path='/' element={ <Home /> }/>
      <Route path='/comedy' element={ <Comedy /> } />
      <Route path='/serials' element={ <Serials /> } />
      <Route path='*' element={ <Error />} />
    </Route>
    
    </Routes>
    
    </BrowserRouter>
    )
}

export default App