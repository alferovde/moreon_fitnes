
import style from './mobile_menu_window.module.scss'
import type { IProps } from '../../interfaces/any_interfaces'
import { useEffect, useState } from 'react'
import logo from '../../assets/img/header_logo.png'
import { header_menu } from '../../store/local'
import type { INavigationMenu } from '../../interfaces/components_interfaes'
import { NavLink } from 'react-router'
const MobileMenuWindow = ({setMyVar,  width}:IProps) => {



    const [open, setOpen] = useState('animate__animated animate__bounceInRight')

    useEffect(()=>{
        width > 1000 ?  setOpen('animate__animated animate__bounceOutLeft '): undefined
    })
 

    function closeMobileMenu(){


        if(setMyVar){
            setOpen('animate__animated animate__bounceOutLeft ')
            setTimeout(()=>{
                setMyVar(myVar => !myVar)
            },1000)
        }

    }

    function renderMenu(){
        return header_menu.map((item:INavigationMenu)=>{
            return <li key={item.id}>
                <NavLink to={item.href}>
{item.text}
                </NavLink>
            </li>
        })
    }


  return (
    <div className={ ` ${style.mobile_menu} ${open} `}>
      
        <div className={style.btn_close} onClick={closeMobileMenu}></div>

        <img src={logo} alt="" />

        <nav>{renderMenu()}</nav>

    </div>
  )
}

export default MobileMenuWindow
