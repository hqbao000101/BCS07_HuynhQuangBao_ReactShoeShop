const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  ],
  arrCart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      const newArrCart = [...state.arrCart];
      let index = newArrCart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        newArrCart[index] = {
          ...newArrCart[index],
          quantity: newArrCart[index].quantity + 1,
        };
      } else {
        newArrCart.push({ ...action.payload, quantity: 1 });
      }
      return (state = {
        ...state,
        arrCart: newArrCart,
      });

    case "DECREASEQUANTITY":
      const newArr = [...state.arrCart];
      let itemIndex = newArr.findIndex((item) => item.id === action.payload.id);
      newArr[itemIndex] = {
        ...newArr[itemIndex],
        quantity: newArr[itemIndex].quantity - 1,
      };
      if (newArr[itemIndex].quantity === 0) {
        newArr.splice(itemIndex, 1);
      }
      return (state = {
        ...state,
        arrCart: newArr,
      });

    case "ADDQUANTITY":
      const addQuantity = [...state.arrCart];
      let addIndex = addQuantity.findIndex(
        (item) => item.id === action.payload.id
      );
      addQuantity[addIndex] = {
        ...addQuantity[addIndex],
        quantity: addQuantity[addIndex].quantity + 1,
      };
      return (state = {
        ...state,
        arrCart: addQuantity,
      });

    case "REMOVEALL":
      return (state = {
        ...state,
        arrCart: [],
      });

    default:
      return state;
  }
};
