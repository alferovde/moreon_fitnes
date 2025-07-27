import { useState, useEffect } from 'react'
import 'animate.css';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header/Header'
import type { IWindowSize } from './interfaces/any_interfaces';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage/MainPage';
import {  Route, Routes } from 'react-router';

function App() {

  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);




  return (

    <>

      <Header {...windowSize} />

      <Routes>

        <Route path='/' element={<MainPage />} />

      </Routes>


      <Footer />
    </>

  )
}

export default App
