import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <NavBar />
      <div className='container'>
        {/* <button className='btn btn-primary'>hi</button> */}
      </div>
    </div>
  );
}

export default App;
