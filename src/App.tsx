import { useState, useEffect } from 'react'
import 'animate.css';
import './App.css'
import phone from './assets/img/icons/Phone.svg'
import Header from './Components/Header/Header'
import type { IWindowSize } from './interfaces/any_interfaces';

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





</main>
  )
}

export default App
