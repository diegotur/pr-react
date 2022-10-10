import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price})=>{
    return(
        <article className="CardItemList">
            <header className = "HeaderList">
                <h2 className="ItemHeaderList">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImgList"/>
            </picture>
            <section>
                <p className="InfoList">
                    ${price}
                </p>
            </section>
            <footer className="ItemFooterList">
            <Link to={`/detail/${id}`} className="Link">COMPRAR</Link>
            </footer>
        </article>
    )
}

export default Item