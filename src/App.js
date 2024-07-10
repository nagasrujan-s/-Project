import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Singledata from './components/Singledata';
import Readcartdata from './components/Readcartdata';



function App() {
  return (
    <>

      <Router>
        <Navbar></Navbar>
        <Routes>
         <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/components/Singledata/:productid' element={<Singledata/>}></Route>
          <Route exact path='/components/Readcartdata' element={<Readcartdata/>}></Route>
        </Routes>
      </Router>

    </>

  );
}

export default App;
