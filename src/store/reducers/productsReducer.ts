interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
    status: boolean;
}

const initialProducts: Product[] = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")!) : [];

// {
//     id: 1,
//     name: 'Pizza',
//     price: 30,
//     image: 'https://tse2.mm.bing.net/th?id=OIP.rbjZ9BjpSLnIo7d5kC76ZQHaFj&pid=Api&P=0&h=220',
//     stock: 20,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum ad officiis ab. Dolorem labore veritatis doloremque magni quibusdam unde sunt, ad nesciunt deleniti. Cum eaque dolorum quod minus labore!',
//     status: true
// },
// {
//     id: 2,
//     name: 'Trà chanh',
//     price: 20,
//     image: 'https://tse3.mm.bing.net/th?id=OIP.KglUrPJiZSxrV8HnF4cFWwHaHa&pid=Api&P=0&h=220',
//     stock: 10,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum ad officiis ab. Dolorem labore veritatis doloremque magni quibusdam unde sunt, ad nesciunt deleniti. Cum eaque dolorum quod minus labore!',
//     status: true
// },
// {
//     id: 3,
//     name: 'Bún đậu mắm tôm',
//     price: 40,
//     image: 'https://tse2.mm.bing.net/th?id=OIP.M0klsofANN1tU9rgLWiXLQHaFj&pid=Api&P=0&h=220',
//     stock: 15,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum ad officiis ab. Dolorem labore veritatis doloremque magni quibusdam unde sunt, ad nesciunt deleniti. Cum eaque dolorum quod minus labore!',
//     status: true
// },
// {
//     id: 4,
//     name: 'Bánh mì',
//     price: 10,
//     image: 'https://tse1.mm.bing.net/th?id=OIP.417F90WLe_o_Mt4zEHZ5PAHaGV&pid=Api&P=0&h=220',
//     stock: 25,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum ad officiis ab. Dolorem labore veritatis doloremque magni quibusdam unde sunt, ad nesciunt deleniti. Cum eaque dolorum quod minus labore!',
//     status: true
// }
// ];
// localStorage.setItem('Products', JSON.stringify(initialProducts))

const productsReducer = (state = initialProducts, action: any): Product[] => {
    switch (action.type) {
        case 'UPDATE_PRODUCT':
            return state.map(product =>
                product.id === action.payload.id ? action.payload : product
            );
        case 'DECREASE_STOCK':
            return state.map(product =>
                product.id === action.payload.id
                    ? { ...product, stock: product.stock - action.payload.quantity }
                    : product
            );
        case 'INCREASE_STOCK':
            return state.map(product =>
                product.id === action.payload.id
                    ? { ...product, stock: product.stock + action.payload.quantity }
                    : product
            );
        default:
            return state;
    }
};

export default productsReducer;