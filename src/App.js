import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attandence from './components/Attandence';
// import Circularbar from './components/Circularbar';
import UserPersonal from './components/UserPersonal';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<UserPersonal />}/>
        <Route path='/attendence' element={<Attandence />}>
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Circularbar/> */}
    </div>
  )
}

export default App;