import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowSnippet from './components/ShowSnippet/ShowSnippet';
import CreateSnippet from './components/CreateSnippet/CreateSnippet';

function App() {
  return (
    <Router>
      <div className='app'>
        <img src={logo} className='app-logo' alt='logo' />
        <NavBar />
        <Header />

        <div className='app__container'>
          <SideBar />
          <div className='container__rightSide'>
            <Routes>
              <Route path='/snippet/:id' element={<ShowSnippet />} />
              <Route path='/snippet/create' element={<CreateSnippet />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
