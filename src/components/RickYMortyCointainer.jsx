import Banner from "./Banner"
import Cards from "./Cards"
import style from "../style/RickYMortyCointainer.module.css"

const RickYMortyCointainer = () => {
  return (
    <div className={style.div__container}>
      <div className={style.div__container_bc}>
        <Banner />
        <Cards />
      </div>
    </div>
  )
}
export default RickYMortyCointainer