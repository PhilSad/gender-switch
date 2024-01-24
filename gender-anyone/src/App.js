import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import { useState } from 'react';

function App() {

  // state for current page
  const [currentPage, setCurrentPage] = useState('Generate');


  return (
    <>
      <ResponsiveAppBar
        setCurrentPage={setCurrentPage}
      />
      coucou
      <div className="App">


        {currentPage === 'Generate' ? <Home /> : null}

        {currentPage === 'About' ? <About /> : null}



      </div>
    </>
  );
}

export default App;
