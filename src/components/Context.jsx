import { createContext, useContext, useEffect, useReducer } from "react";
import reduce from "./Reduce";
import data from "./Data";
// const url = "https://fakestoreapi.com/products";
const AppContext = createContext();

function AppProvider(prop) {
  const { children } = prop;

  // const getData = async () => {
  //   const response = await fetch(data);
  //   const dat = await response.json();
  //   dispatch({ type: "DISPLAY-ITEM", payload: data });
  // };
  const getData = async () => {
    dispatch({ type: "DISPLAY-ITEM", payload: data });
  };

  useEffect(() => {
    getData();
  }, []);

  const iniState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
    open: false,
    shoping: [],
    View: [],
  };
  const [state, dispatch] = useReducer(reduce, iniState);
  function addItem(id) {
    dispatch({ type: "add", payload: id });
  }
  function Increase(id) {
    dispatch({ type: "increase", payload: id });
  }
  function Decrease(id) {
    dispatch({ type: "decrease", payload: id });
  }
  function openSide() {
    dispatch({ type: "open" });
  }
  function closeSide() {
    dispatch({ type: "close" });
  }
  function DeletAll() {
    dispatch({ type: "DeletAll" });
  }
  function View(id) {
    dispatch({ type: "View", payload: id });
  }
  function Remove(id) {
    dispatch({ type: "remove", payload: id });
  }
  useEffect(() => {
    dispatch({ type: "getTotal" });
  }, [state.shoping]);

  const values = {
    state,
    addItem,
    openSide,
    closeSide,
    DeletAll,
    View,
    Remove,
    Increase,
    Decrease,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
function useGlobalContext() {
  return useContext(AppContext);
}
export { AppContext, useGlobalContext, AppProvider };
