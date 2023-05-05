import React from 'react';
import { addTodb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {


    // console.log(props);

    const { name, price, id } = props.cosmetic   //process-2 cosmetic destructuring
    // const { name, price, id } = props                 //process-3 spereading  {...cosmetic} from cosmetics

    const addToCart = (id) => {
        addTodb(id)
    }
    const addToCartWithPara = () => addToCart(id)

    const removeFromCart = id => {
        removeFromDb(id)

    }




    return (
        <div className='product'>

            {/* <h2>Buy This :{props.cosmetic.name}</h2>
            <p>Only on :${props.cosmetic.price}</p>
            <p>ID:{props.cosmetic.id}</p>
            <button onClick={addToCart}>Add to Cart</button> */}


            <h2>Buy This :{name}</h2>
            <p>Only on :${price}</p>
            <p>ID:{id}</p>
            <button onClick={addToCartWithPara}>Add to Cart(Direct)</button>
            <button onClick={() => addToCart(id)}>Add to Cart(Shortcut)</button>
            <br />
            <br />
            <button onClick={() => removeFromCart(id)}>Remove</button>


            {/* <h2>Buy This :{name}</h2>
            <p>Only on :${price}</p>
            <p>ID:{id}</p> */}


        </div>
    );
};

export default Cosmetic;