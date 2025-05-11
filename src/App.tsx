import { useState, useEffect } from 'react'
import 'animate.css';
import './App.css'

import Header from './Components/Header/Header'
import type { IWindowSize } from './interfaces/any_interfaces';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage/MainPage';

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
<main className="">


<Header {...windowSize}  />

<MainPage/>

<Footer/>

</main>
  )
}

export default App
