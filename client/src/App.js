// css
import './App.css';
import logo from './logo.svg';
// libraries
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import SideBar from './components/SideBar/SideBar';
import Snippets from './components/Snippets/Snippets';
import NavBar from './components/NavBar/NavBar';
// pages
import AboutPage from './pages/About/AboutPage';
import ShowSnippet from './pages/ShowSnippet/ShowSnippet';
import CreateSnippet from './pages/CreateSnippet/CreateSnippet';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className='app' data-spy='scroll'>
        <NavBar />
        <LandingPage />
        <div className='app__container' id='app__container'>
          <SideBar />
          <div className='app__containerRightSide'>
            <Routes>
              <Route path='/' element={<Snippets />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/snippet/:id' element={<ShowSnippet />} />
              <Route path='/snippet/create' element={<CreateSnippet />} />
            </Routes>
          </div>
        </div>
        <Link to='landingPage' smooth={true} spy={true}>
          <img src={logo} className='app__logo' alt='logo' />
        </Link>
      </div>
    </Router>
  );
}

export default App;
