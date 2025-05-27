import { useState,useEffect } from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!currency) return;
  
      fetch(` https://v6.exchangerate-api.com/v6/9e58a02f9e73201827d30780/latest/${currency}`)
    .then(res => res.json())
    .then(data => setData(data.conversion_rates))
    .catch(err => setError(err.message));
}, [currency]);

  
    return  data;
  }
  export default useCurrencyInfo;
