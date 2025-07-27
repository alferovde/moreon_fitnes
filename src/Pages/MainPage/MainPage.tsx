


import style from './main_pge.module.scss'
import Hero from './MainPageComponents/Hero/Hero'

import Stoks_slider from './MainPageComponents/Stocks/Stoks_slider'

const MainPage = () => {



  return (
    <main className={style.main_page}>
      <Hero/>
      <Stoks_slider/>
    </main>
  )
}

export default MainPage
