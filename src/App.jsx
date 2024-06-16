import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import{
  BrowserRouter,
  Routes,
  Route
  
}from 'react-router-dom'
import Home from './Components/Home';
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
export default App