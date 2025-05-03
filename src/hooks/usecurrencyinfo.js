import { useState,useEffect } from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!currency) return;
  
      fetch(` https://v6.exchangerate-api.com/v6/57b3bb8c1ac6482b75291b36/latest/USD`)
        .then((res) => res.json())
        .then((result) => {
          setData(result.conversion_rates || {});
        })
        .catch((err) => {
          setError(err.message);
        });
    }, [currency]);
  
    return  data;
  }
  export default useCurrencyInfo;
