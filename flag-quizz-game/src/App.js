import logo from './logo.svg';
import HomeComponent from './component/Home';
import {GlobalFont } from './fonts/index.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactComponent from './component/Contact';
import HowToPlayComponent from './component/HowToPlay';
import PlayComponent from './component/Play';

function App() {
  return (
    <BrowserRouter>
    <GlobalFont/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
