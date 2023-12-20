import {  useEffect, useState } from "react";

//Custom hook = it will return some data
export default function UseCurrencyInfo(currency) {
    
   //Our custom hook can also use built in hooks
    const [data, setData] = useState({})          //here we pass the empty object in case there is no fetch call the our app will not crash
    
    //whenever currency changes useEffect will fetch data 
    useEffect (() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) =>{ 
            return res.json() 
        })
        .then((res)=> setData(res[currency]))           //jo url hai usme ${currency} h so jo bhi currency hum search krenge (inr/usd) vo dynamically vahi fetch krdega ...so we use square bracket to get all currency from url using res[currency]
    }, [currency])

    // console.log(data);  //contain all currencies
    return data
}
