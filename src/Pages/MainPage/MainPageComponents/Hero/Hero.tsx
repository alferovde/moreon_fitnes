import style from './hero.module.scss'
// import hero_img from '../../../../assets/img/hero_img.png'
import Button from '../../../../StyleComponents/Button/Button'
const Hero = () => {
  return (
    <section className={style.hero}>
      
      <div className={`${style.hero__wrapper} container`}>
        <div className={style.hero__left}>
          <h1>Создай тело мечты вместе <br /><span>с Moreon Fitness</span> </h1>

      <ul>
        <li className='icon_text'>Гибкая клубная карта</li>
        <li className='icon_text'>Персональные тренировки</li>
        <li className='icon_text'>Все самые продвинутые программы 2022 года</li>
      </ul>

      <div className={style.btn_section}>
        <Button>Узнать подробнее</Button>
        <Button type='transpaent'>Рассчитать стоимость</Button>

      </div>

        </div>
        <div className={style.hero__right}>
          <ul>
            <li>
              <h3>500 000 м2</h3>
              <p>Площадь зала</p>
            </li>
            <li>
              <h3>100 500</h3>
              <p>Тренажеров VIP уровня</p>
            </li>
            <li>
           
              <p>Бассейны <br /> и <br /> СПА центр</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Hero
