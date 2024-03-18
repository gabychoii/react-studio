function BakeryItem(props) {
    return(
        <div className="menuItemCard">
            <img src={props.image} alt={props.name} /> {}
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button id="addToCartButton" onClick={() => props.display(props.name)}>Add to Cart</button>
        </div>
    )
}

export default BakeryItem