import ProductCard from "../productCard/ProductCard";
import './itemList.css'

const ItemList = ({ myProducts }) => {
    return (
        <div className="lista">
            {myProducts.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ItemList;