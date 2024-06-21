interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const initialCart: CartItem[] = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")!) : [];
// localStorage.setItem('Cart', JSON.stringify(initialCart));
const cartReducer = (state = initialCart, action: any): CartItem[] => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productToAdd = action.payload;
            const existingProduct = state.find(item => item.id === productToAdd.id);
            if (!existingProduct) {
                return [...state, { ...productToAdd, quantity: 1 }];
            } else {
                return state.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'UPDATE_CART':
            const { id, quantity } = action.payload;
            return state.map(item =>
                item.id === id ? { ...item, quantity } : item
            );
        default:
            return state;
    }
};

export default cartReducer;