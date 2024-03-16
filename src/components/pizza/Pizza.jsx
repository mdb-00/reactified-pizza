export default function Pizza({pizzaObj}) {
    let price = pizzaObj.soldOut ? 'SOLD OUT' : `$${pizzaObj.price}`;
    return (
        <li className={pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{price}</span>
            </div>
        </li>
    )
}