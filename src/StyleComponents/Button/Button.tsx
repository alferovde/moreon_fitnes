
import type { IButton } from '../../interfaces/style_components_interfaces'
import style from './button.module.scss'
const Button = ({children, type='color'}:IButton) => {
  return (
    <button className={type === 'color' ? style.color : style.transparent} >
      {children}
    </button>
  )
}

export default Button
