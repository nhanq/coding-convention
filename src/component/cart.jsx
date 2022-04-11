import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action'
const Cart = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.handleCart);
    const handleButtonPlus = (product) => {
        dispatch(addCart(product))
    }
    const handleButtonMinus = (product) => {
        dispatch(delCart(product))
    }
    const showProduct = () => {
        return (
            <>
                {product.map((item) => {
                    return (
                        <>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={item.image} alt={item.title} height={'200px'} width={"180px"} />
                                </div>
                                <div className="col-md-4">
                                    <h3> {item.title}</h3>
                                    <p className="lead fw-bold">
                                        {item.qty} X ${item.price} =$ {item.qty * item.price}
                                    </p>
                                    <button className="btn btn-outline-dark me-4" onClick={() => handleButtonMinus(product)}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <button className="btn btn-outline-dark me-4" onClick={() => handleButtonPlus(product)}>
                                        <i className="fa fa-plus"></i>
                                    </button>

                                </div>

                            </div>

                        </>
                    )

                })}
            </>
        )
    }
    console.log(product);
    return (
        <>
            { product.length === 0 ? <>Emtpy</> : <showProduct /> }
        </>
    );
}
export default Cart;
