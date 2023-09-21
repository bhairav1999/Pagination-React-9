import axios from "axios";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const isLoading = true;
  const API = "https://hn.algolia.com/api/v1/search?query=html";
  const FeatchData = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(`Bhairav`, res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FeatchData(API);
  }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  const maindata = useGlobalContext();
  return <>jhjihbn {maindata}</>;
};

export default Stories;
