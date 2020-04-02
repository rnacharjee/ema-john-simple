import React, { useState } from 'react';
import '../../fakeData'
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';


const Shop = () => {
const firstTen = fakeData.slice(0,10);     
const [products, setProducts] = useState(firstTen);
const [cart , setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log("product Added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        
        <div className ="shop-container">
            
            <div className="product-container">
                
            {
                products.map(pd => <Product handleAddProduct={handleAddProduct} product ={pd}></Product>)
            }
                
            </div>
        <div className="cart-container">
                    <Cart cart={cart}></Cart>

        </div>
                
        </div>
    );
};

export default Shop;