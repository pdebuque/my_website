// import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from '../Home/Home'
import Writing from '../Writing/Writing'
import Code from '../Code/Code'
import Music from '../Music/Music';
import Post from '../Post/Post';

import {posts} from '../../articles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is paolo's website</h1>
        <img src="img_assets/Paolo_logo.png" alt="logo" />

      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/code' element={<Code />} />
        <Route path='/writing' element={<Writing />} >
          {posts.map(post=><Route path = {`/${post.id}`} element = {<Post/>}/>)}

          </Route>
        <Route path='/music' element={<Music />} />

        


      </Routes>

    </div>
  );
}

export default App;

