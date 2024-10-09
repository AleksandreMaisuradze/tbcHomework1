import './productscard.css'

export default function ProductCard(props) {
    const { product } = props;

    return (
        <div className="productCardDiv">
            <h1>Title:{product.title}</h1>
            <h3>Category:{product.category}</h3>
            <p>Description:{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <div>
                {product.images.length > 0 ? (
                    <img src={product.images[0]} alt="Product Image" width={200} height={200} />
                ) : (
                    <p>No image available.</p>
                )}
            </div>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>

        </div>
    );
}