import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowSnippet from './components/ShowSnippet/ShowSnippet';
import CreateSnippet from './components/CreateSnippet/CreateSnippet';
// import About from './components/About/About';
import LandingPage from './components/LandingPage/LandingPage';
import UpdateSnippet from './components/UpdateSnippet/UpdateSnippet';

function App() {
  return (
    <Router>
      <div className='app'>
        <img src={logo} className='app-logo' alt='logo' />
        <NavBar />
        {/* <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes> */}
        {/* <LandingPage /> */}
        <Header />

        <div className='app__container'>
          <SideBar />
          <div className='container__rightSide'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/snippet/:id' element={<ShowSnippet />} />
              <Route path='/snippet/create' element={<CreateSnippet />} />
              <Route path='/snippet/update' element={<UpdateSnippet />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
