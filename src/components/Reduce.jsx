function Reduce(state, action) {
  if (action.type === "increase") {
    let tempCart = state.shoping.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, shoping: tempCart };
  }
  if (action.type === "decrease") {
    let tempCart = state.shoping
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, shoping: tempCart };
  }
  if (action.type === "DeletAll") {
    return { ...state, shoping: [] };
  }
  if (action.type === "DISPLAY-ITEM") {
    return { ...state, cart: action.payload };
  }

  if (action.type === "open") {
    return { ...state, open: true };
  }
  if (action.type === "close") {
    return { ...state, open: false };
  }
  if (action.type === "remove") {
    return {
      ...state,
      shoping: state.shoping.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "View") {
    return {
      ...state,
      View: state.cart.filter((item) => item.id === action.payload),
    };
  }

  if (action.type === "add") {
    const newState = state.cart.filter((ite) => ite.id === action.payload);
    let newCart = state.shoping.reduce((array, item) => {
      if (item.id !== action.payload) {
        array.push(item);
      }
      return array;
    }, newState);

    return {
      ...state,
      shoping: newCart,
    };
  }

  if (action.type === "getTotal") {
    let { total, amount } = state.shoping.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartItem.total0 = itemTotal;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
}

export default Reduce;
