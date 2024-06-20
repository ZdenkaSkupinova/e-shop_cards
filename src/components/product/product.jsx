import "./product.css"

export const Product = (props) => {
    const {ulr, name, description, dimensions, cost} = props
    return (
        <div className="card_detail">
        <img className="card_photo" src={ulr} alt="foto" />
        <div className = "text">
            <h2>{name}</h2>
            <div className="card_description">Poslání: {description}</div>
            <div className="card_dimensions">Velikost karty: {dimensions} cm</div>
            <div className="card_cost">Cena: {cost} Kč</div>
            <button id="btn">Do košíku</button> 
        </div> 
    </div> 
  );
};