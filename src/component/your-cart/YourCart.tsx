import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function YourCart() {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.reducerCart);

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_CART', payload: { id, quantity } });
  };

  const deleteItem = (id: number) => {
    const itemToRemove = carts.find(item => item.id === id);
    if (itemToRemove && window.confirm('Are you sure you want to delete this item?')) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
      dispatch({ type: 'INCREASE_STOCK', payload: { id, quantity: itemToRemove.quantity } });
      alert('Delete cart successfully');
    }
  };

  const total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white w-2/5 p-4 border-rose-200 rounded-lg">
      <h2 className='bg-rose-200 rounded-t-lg text-rose-500 p-1.5'>Your Cart</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">STT</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.price} USD</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="border rounded p-1 w-16 text-center"
                />
              </td>
              <td className="border flex px-4 py-2">
                <button
                  className="bg-blue-500 text-sm text-white px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-sm text-white px-2 py-1 rounded ml-2"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p>
          There are <span className="font-bold">{carts.length}</span> items in your shopping cart.
        </p>
        <p className="text-right text-2xl font-bold text-red-500 mt-2">{total} USD</p>
      </div>
    </div>
  );
}
