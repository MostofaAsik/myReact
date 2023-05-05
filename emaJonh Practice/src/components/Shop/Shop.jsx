import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(cart);
    }


    return (
        <div className='shop-conatiner'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }

            </div>
            <div className='cart-conatainer'>
                <h2>Order Summury</h2>
                <p>Total Cart:{cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;