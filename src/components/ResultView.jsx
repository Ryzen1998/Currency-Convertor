import React, { useContext } from 'react'
import conversionContext from '../context/conversionContext'

function ResultView() {
    const {result,to,from,amount}=useContext(conversionContext)
    if(result===null||result===""||Object.keys(result).length===0){
        return (   <div className='container'>
        <div className='rate-info'>
       <h3>No Data</h3>
        </div>
        
         </div>)
    }
  return (
    <>
    <div className='container'>
   <div className='rate-info'>
    {`1 ${from} = ${result.conversion_rate} ${to}`}
   </div>
   <div className='result-info'>
    {`${amount} ${from} = ${result.conversion_result} ${to}  `}
   </div>
    </div>
    
    </>
  )
}

export default ResultView
