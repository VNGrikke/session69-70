import React from 'react';
import ListProducts from './component/list-products/ListProducts';
import YourCart from './component/your-cart/YourCart';

const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='max-w-6xl w-full'>
        <h1 className='pb-5 text-4xl'>Shopping Cart</h1>
        <hr />
        <div className='flex justify-between gap-10'>
          <ListProducts />
          <YourCart />
        </div>
      </div>
    </div>
  );
};

export default App;
