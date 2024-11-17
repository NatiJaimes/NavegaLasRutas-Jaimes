import { Link } from "react-router-dom";
import './navBar.css'

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="widget">
                <h3>🛒</h3>
                <span>2</span>
            </div>
        </Link>
    );
};

export default CartWidget; 