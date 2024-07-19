import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItems {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [number, number];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
  cartQuantity: number; // Add cartQuantity to the item interface
}

interface IState {
  cartItems: ICartItems[];
  cartTotalQty: number;
  cartTotalAmount: number;
}

const initialState: IState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItems>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      // Update cartTotalQty and cartTotalAmount
      state.cartTotalQty += 1;
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }

        // Update cartTotalQty and cartTotalAmount
        state.cartTotalQty -= 1;
        state.cartTotalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.cartQuantity,
          0
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
