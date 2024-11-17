import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Pagina carrito</h1>
      <p>(Listado de Items)</p>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
