// import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from '../Home/Home'
/* v6: 
no exact path anymore
e.g. Route path = '/' element = {<Home />}


*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is paolo's website</h1>
        <img src="img_assets/Paolo_logo.png" alt="logo" />

      </header>
      <Routes>
        <Route path='/' element={<Home />}/>


      </Routes>

    </div>
  );
}

export default App;

