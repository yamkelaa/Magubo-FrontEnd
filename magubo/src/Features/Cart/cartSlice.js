import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   removeItem: (state, action) => {
  const itemId = action.payload.id;
  const itemPrice = action.payload.servicePrice;

  // Filter out the removed item and update cartItems
  state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

  // Calculate the new total by subtracting the item's price
  state.total -= itemPrice;
  toast.error(`PRODUCT REMOVED`, {
        position: toast.POSITION.BOTTOM_RIGHT, // Adjust the position as needed
        autoClose: 2000, // Set the duration for the message
      });
},
    addItem: (state, action) => {
      const itemId = action.payload.id;
      const itemName = action.payload.serviceName;
      const itemPrice = action.payload.servicePrice;
      const newItem = { id: itemId, serviceName: itemName, servicePrice: itemPrice };
      // Display a toast message
      toast.success(`ADDED TO CART!`, {
        position: toast.POSITION.BOTTOM_RIGHT, // Adjust the position as needed
        autoClose: 2000, // Set the duration for the message
      });
     return {
    ...state,
    cartItems: [...state.cartItems, newItem],
    total : state.total + itemPrice

  }; 
    },
    clearCart: (state) => {
      // Clear the cart by setting cartItems to an empty array and total to 0
      state.cartItems = [];
      state.total = 0;
  },
}
});

export const { removeItem, addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
