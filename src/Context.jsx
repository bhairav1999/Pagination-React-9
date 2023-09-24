import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true, // page loading before api hit
  query: "",
  nbPages: 0,
  page: 0,
  hits: [], // api data
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const FeatchData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(`Bhairav`, res.data);
      dispatch({
        type: "GET_POST",
        payload: {
          //extra data send reducer this time useful
          hits: res.data.hits,
          nbPages: res.data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // remove popst
  const removePost = (Post_ID) => {
    dispatch({ type: "DELETE_POST", payload: Post_ID });
  };

  // search for post

  const searchPost = (Post_Search) => {
    dispatch({ type: "SEARCH_POST", payload: Post_Search });
  };

  //  pagination

  // pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  useEffect(() => {
    FeatchData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost ,searchPost ,getPrevPage ,getNextPage}}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
