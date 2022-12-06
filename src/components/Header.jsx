import gifHeader from '../img/gifBanner.gif'
import rickAndMorty from '../img/rickandmorty.png'
import style from '../style/Header.module.css'
const Header = () => {
  return (
    <div className={style.div}>
      <div>
        <img src={rickAndMorty} alt="Rick y Morty" className={style.img__rick}/>
      </div>
      <div>
        <img src={gifHeader} alt="" className={style.gif}/>
      </div>
    </div>
  )
}
export default Header