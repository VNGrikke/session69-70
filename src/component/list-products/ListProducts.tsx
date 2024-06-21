import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
    status: boolean;
}

export default function ListProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.reducerProduct);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    const handleClick = (product: Product) => {
        const quantity = quantities[product.id] || 1;
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
        dispatch({ type: 'DECREASE_STOCK', payload: { id: product.id, quantity } });
        alert('Add to cart successfully');
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        setQuantities({ ...quantities, [productId]: quantity });
    };

    return (
        <div className='w-3/5 mt-3 border border-blue-700 rounded-lg'>
            <h2 className='bg-sky-700 rounded-t-lg text-white p-1.5'>List Products</h2>
            <div className='border-t'>
                {products.map(product => (
                    <div key={product.id} className='flex border-b p-2 gap-5'>
                        <div className='flex items-center gap-4'>
                            <img src={product.image} alt={product.name} className='object-cover w-24 h-24' />
                            <div className='w-2/3'>
                                <p>{product.name}</p>
                                <p className='text-xs'>{product.description}</p>
                            </div>
                        </div>
                        <div className='w-1/6 flex flex-col'>
                            <input
                                type="number"
                                value={quantities[product.id] || 1}
                                onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                                min={1}
                                className='mb-2 w-10 text-center border-black'
                            />
                            <p
                                onClick={() => handleClick(product)}
                                className='price w-16 text-center rounded cursor-pointer bg-orange-600 text-white'
                            >
                                {product.price} USD
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
