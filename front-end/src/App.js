import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
// import Snacks from './Components/Snacks'
// import Snackdetails from './Components/Snackdetails'
// import Snacknewform from './Components/Snacknewform'
// import Snackeditform from './Components/Snackeditform'


//pages
import Index from './Pages/Index'
import Show from './Pages/Show'
import New from './Pages/New'
import Editpage from './Pages/Editpage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/snacks" element={<Index/>}/>
          <Route path="/snacks/:id" element={<Show/>}/>
          <Route path='/snacks/new' element={<New/>}/>
          <Route path='/snacks/:id/edit' element={<Editpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
