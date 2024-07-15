import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface Product {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface CartList {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  quantity: number;
}

interface IState {
  product: Product[];
  cart: CartList[];
  isLoading: boolean;
  isError: boolean;
  itemQuantity: number;
}

const initialState: IState = {
  product: [],
  cart: [],
  isLoading: false,
  isError: false,
  itemQuantity: 1,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
      );
      return fulfillWithValue(response.data.meals);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleIncrement: (state, action: PayloadAction<string>) => {
      const product = state.product.find((p) => p.idMeal === action.payload);

      if (product) {
        const cartProduct = state.cart.find((c) => c.idMeal === action.payload);
        if (cartProduct) {
          state.cart = state.cart.map((c) =>
            c.idMeal === action.payload ? { ...c, quantity: c.quantity + 1 } : c
          );
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
    },
    handleDecrement: (state, action: PayloadAction<string>) => {
      const cartProduct = state.cart.find((c) => c.idMeal === action.payload);
      if (cartProduct && cartProduct.quantity > 1) {
        state.cart = state.cart.map((c) =>
          c.idMeal === action.payload ? { ...c, quantity: c.quantity - 1 } : c
        );
      } else if (cartProduct && cartProduct.quantity === 1) {
        state.cart = state.cart.filter((c) => c.idMeal !== action.payload);
      }
    },
    addToCartHandler: (state, action: PayloadAction<Product>) => {
      const product = state.cart.find((c) => c.idMeal === action.payload.idMeal);
      if (product) {
        console.log(product, "inside product if-----");
        
        state.cart = state.cart.map((c) =>
          c.idMeal === action.payload.idMeal ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        state.cart.push({ ...action.payload, quantity: state.itemQuantity });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.product = [];
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.product = action.payload;
      // toast.success("Product data fetched successfully!");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      const error: any = action.payload;
      toast.error(error.message as string);
    });
  },
});

export const { handleDecrement, handleIncrement, addToCartHandler } = productSlice.actions;
export default productSlice.reducer;
