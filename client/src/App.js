import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <img src={logo} className='app-logo' alt='logo' />
      <NavBar />
      <Header />

      <div className='container'>
        {/* <Header /> */}
        {/* <button className='btn btn-primary'>hi</button> */}
      </div>
    </div>
  );
}

export default App;
