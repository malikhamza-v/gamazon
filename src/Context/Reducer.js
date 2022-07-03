export const initialState = {
  cart: [],
  user: null,
};
export const totalPrice = (cart) => {
  const total = cart.reduce(
    (amount, item) => amount + item.price * item.qty,
    0
  );
  return total;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      let statebtn;
      state.cart.map((items) => {
        if (items.id === action.item.id) {
          statebtn = true;
        } else {
        }
      });
      if (statebtn) {
        let newCart3 = [...state.cart];
        newCart3.filter((element, index) => {
          if (element.id === action.item.id) {
            return (element.qty = element.qty + 1);
          }
        });

        return {
          ...state,
          cart: newCart3,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      }

    case "remove_from_cart":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("can't remove item");
      }

      return {
        ...state,
        cart: newCart,
      };

    case "update_from_cart":
      const index2 = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart2 = [...state.cart];
      newCart2[index2].qty = action.qty;

      return {
        ...state,
        cart: newCart2,
      };

    case "set_user":
      return {
        ...state,
        user: action.user,
      };

    case "empty_basket":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
