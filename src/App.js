import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <h2 className='text-3xl font-bold underline'>Hello world</h2>
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "/reviews" element = {<Reviews></Reviews>}></Route>
          <Route path = "/dashboard" element = {<Dashboard></Dashboard>}></Route>
          <Route path = "/blogs" element = {<Blogs></Blogs>}></Route>
          <Route path = "/about" element = {<About></About>}></Route>
          <Route path = "*" element = {<NotFound></NotFound>}></Route>
        </Routes>
     
    </div>
  );
}

export default App;
