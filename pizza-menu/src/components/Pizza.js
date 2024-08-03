export function Pizza(props) {
  return (
    <li className={`pizza ${props.data.soldOut ? "sold-out" : null}`}>
      <img src={props.data.photoName} alt="pizza"></img>
      <div>
        <h3>{props.data.name}</h3>
        <p>{props.data.ingredients}</p>
        <span>{props.data.soldOut ? "SOLD OUT" : props.data.price}</span>
      </div>
    </li>
  );
}
