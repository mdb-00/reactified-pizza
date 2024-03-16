export default function Pizza(pizzaObj) {
    return (
        <li className="{pizzaObj.soldOut ? 'sold-out' : 'pizza'}">
            <img src={pizzaObj.photoName} alt="" />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
            </div>
        </li>
    )
}