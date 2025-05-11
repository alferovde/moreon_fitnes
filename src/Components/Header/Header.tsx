import style from './header.module.scss'
import TopHeader from './TopHeader/TopHeader'
import NavigationHeader from './NavigationHeader/NavigationHeader'
import type { IWindowSize } from '../../interfaces/any_interfaces'

const Header = (windowSize:IWindowSize) => {


  return (
    <header className={style.header}>
        <TopHeader/>
        <NavigationHeader {...windowSize} />
      
    </header>
  )
}

export default Header
