import './App.css';
import logo from './logo.svg';
import SideBar from './components/SideBar/SideBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowSnippet from './components/ShowSnippet/ShowSnippet';
import CreateSnippet from './components/CreateSnippet/CreateSnippet';
import Snippets from './components/Snippets/Snippets';
import LandingPage from './components/LandingPage/LandingPage';
import UpdateSnippet from './components/UpdateSnippet/UpdateSnippet';
import NavBar from './components/NavBar/NavBar';
import { Link } from 'react-scroll';
import AboutPage from './pages/About/AboutPage';

function App() {
  return (
    <Router>
      <div className='app' data-spy='scroll'>
        <NavBar />
        <LandingPage />

        <div className='app__container' id='app__container'>
          <SideBar />

          <div className='container__rightSide'>
            <Routes>
              <Route path='/' element={<Snippets />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/snippet/:id' element={<ShowSnippet />} />
              <Route path='/snippet/create' element={<CreateSnippet />} />
              <Route path='/snippet/update' element={<UpdateSnippet />} />
            </Routes>
          </div>
        </div>

        <Link to='landingPage' smooth={true} spy={true}>
          <img src={logo} className='app-logo' alt='logo' />
        </Link>
      </div>
    </Router>
  );
}

export default App;
