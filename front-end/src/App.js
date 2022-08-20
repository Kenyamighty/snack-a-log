import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Snacks from './Components/Snacks'
import Snackdetails from './Components/Snackdetails'
import Snacknewform from './Components/Snacknewform'
import Snackeditform from './Components/Snackeditform'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/snacks" element={<Snacks/>}/>
          <Route path="/snacks/:id" element={<Snackdetails/>}/>
          <Route path='/snacks/new' element={<Snacknewform/>}/>
          <Route path='/snacks/:id/edit' element={<Snackeditform/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
