import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Project from './components/Project';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>       
        <Route path={'/about'} element={<About/>}></Route>
        <Route path={'/project'} element={<Project/>}></Route>
        <Route path={'/services'} element={<Services/>}></Route>
        <Route path={'/contact'} element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>


      {/* <Header />
      <Home />
      <About />
      <Services/>
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
