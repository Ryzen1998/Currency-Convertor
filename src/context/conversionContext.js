/* eslint-disable react-hooks/rules-of-hooks */
import { createContext,useState,useEffect } from "react";

const conversionContext = createContext('');


const conversionToken= process.env.REACT_APP_CONVERSION_TOKEN;
const header = new Headers();
header.append("apikey",conversionToken)
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: header
}

 
 
export const conversionProvider=({children})=>{
   

    const [currencyList,setCurrencyList]=useState([])
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [amount,setAmount]=useState(0)
    const [result,SetResult]=useState({})

    useEffect(()=>{
      currList()


    },[])

    const currList = async ()=>{
       const response = await fetch(`https://openexchangerates.org/api/currencies.json`)
        const data = await response.json();
        setCurrencyList(data)
    }
    
    const convert=async()=>{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${conversionToken}/pair/${from}/${to}/${amount}`)
      const data = await response.json();
      SetResult(data)
      


    }

  return <conversionContext.Provider value={{currencyList,from,setFrom,to,setTo,amount,setAmount,convert,result}}>{children}</conversionContext.Provider>


}
export default conversionContext











  

  

 

  
  