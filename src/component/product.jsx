import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action'
const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
            console.log(product);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>

                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={250} />

                    <Skeleton height={85} width={600} />
                    <Skeleton height={30} width={150} />
                    <Skeleton height={50} width={250} />
                    <Skeleton height={85} width={600} />
                    <div className="col-md-6 d-flex" >
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                    </div>

                </div>

            </>
        );
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height={'400px'} width={'400px'} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star" /></p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className='btn btn-outline-dark me-2' onClick={()=>addProduct(product)}>Add to cart</button>
                    <NavLink className='btn btn-dark ' to="/cart">Go to cart</NavLink>
                </div>
            </>
        )


    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row py-4 justify-content-center">
                    { loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}
export default Product;
