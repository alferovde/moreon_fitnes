
import style from './header_navigation.module.scss'
import logo from '../../../assets/img/header_logo.png'
import { header_menu } from '../../../store/local'
import type { INavigationMenu } from '../../../interfaces/components_interfaes'
import { NavLink } from 'react-router'
import type { IWindowSize } from '../../../interfaces/any_interfaces'
import { useState } from 'react'
import MobileMenuWindow from '../../MobileMenuWindow/MobileMenuWindow'
const NavigationHeader = (width: IWindowSize) => {

    const [mobileMenuWindow, setMobileMenuWindow] = useState<boolean>(false);

    console.log(width.width)


    function openMobileMenu() {
        setMobileMenuWindow(prev => !prev)
    }



    const renderMenu = () => {
        return header_menu.map((item: INavigationMenu) => {
            return <li key={item.id}>

                <NavLink
                    to={item.href}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    {item.text}
                </NavLink>
            </li>
        })
    }

    return (
        <div className={style.header_navigation}>
            <div className={`${style.header_navigation__wrapper} container`}>
                {width.width < 1000 ?

                    <div className={style.mobile_menu__wrapper} onClick={openMobileMenu}>
                        <div className={`${style.mobile_menu} animate__animated animate__backInLeft`}

                        ></div>
                    </div>


                    : undefined}

                <img src={logo} alt="logo" />

                {width.width < 1000 ? undefined : <nav className='animate__animated animate__bounceIn' >
                    {renderMenu()}
                </nav>}

            </div>

            {mobileMenuWindow ? <MobileMenuWindow width={width.width} setMyVar={setMobileMenuWindow} myVar={mobileMenuWindow} /> : undefined}


        </div>
    )
}

export default NavigationHeader
