import React from 'react'
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = () => {

    const navigate = useNavigate();
    const handleClick = () => {
     navigate('/Shipping', { state: { cartTotal } });
    };

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
     if (isEmpty) return (
     <><h1 className='text-center'>Your cart is empty</h1><Link to="/">
        <button className='buy-button'>Go to Art Gallery</button></Link></>
     );
  return (
    <center>
    <section className='cart-sec'>
        <center><div className='cart-jobl'>
            
            <div>
                <h2>Cart ({totalUniqueItems}) total Items: ({totalItems})</h2>
                <table className='table table-light table-hover mt-0'>
                    <tbody>
                        {items.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '4rem'}} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>QTY ({item.quantity})</td>
                                    <td>
                                        <button 
                                           className='btn btn-info ms-2'
                                           onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <button
                                        className='btn btn-info ms-2'
                                        onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button
                                        className='btn btn-danger ms-2'
                                        onClick={()=>removeItem(item.id)}>Remove Items</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-auto ms-auto">
                <h2>Total Price: $ {cartTotal}</h2>
            </div>
            <div className="col-auto">
                <button className="btn btn-danger m-2"
                onClick={()=> emptyCart()}
                >Clear Cart</button>
                <button className="btn btn-primary m-2" onClick={handleClick}>Buy Now</button>
            </div>
            <Link to="/"><button className='buy-button'>Go Back</button></Link>
        </div>
        </center>
        
        {/* <Link to="/"><button className='buy-button'>Go to Art Gallery</button></Link> */}
    </section>
    </center>
  )
}

export default Cart;