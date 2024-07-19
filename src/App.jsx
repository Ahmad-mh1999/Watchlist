import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Watchlist from './Components/Watchlist';
import Add from './Components/Add';
import Watched from './Components/Watched';
import ContextProvider from './Components/Context/GlobalContext';
function App() {
  return (
    <div className="App">
      <Router >
        <ContextProvider >
          <Navbar />
          <Routes>
            <Route path='/' element={<Watchlist />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
