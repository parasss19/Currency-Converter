import { useState } from 'react'

import InputBox from './Components/InputBox'
import UseCurrencyInfo from './CustomHook/UseCurrenyInfo'
import bgImage from './assets/bg1.jpg'

function App() {
  const [amount, setAmount] = useState("")
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  //use our custom hook (UseCurrencyInfo )and currencyInfo contain the data return by our custom hook
  const currencyInfo = UseCurrencyInfo(currencyFrom)    

  //now the fetched object keys are currencytype (like usd,inr etc) which we want to show to users ... so to get all the keys we use Object.keys()
  const options = Object.keys(currencyInfo)

  //swap button functionality
  const swap = () =>{
    setAmount(convertedAmount)
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setConvertedAmount(amount)
  }

  //Now the main conversion button functionality which show the result 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[currencyTo])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"  style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover'}}>
    <div className="w-full">

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => { 
              e.preventDefault()
              convert()
            }} >

            {/* First input */}
              <div className="w-full mb-1">
                  <InputBox 
                  label="From" 
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  currencyOptions={options}
                  selectCurrency={currencyFrom}
                  onCurrencyChange={(currency) => setCurrencyFrom(currency)}
                  />
              </div>

            {/* Swap button */}
              <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" 
                        onClick={swap}
                    >
                       swap
                    </button>
              </div>
            
            {/* Second input */}
              <div className="w-full mt-1 mb-4">
                    <InputBox 
                    label="To"
                    amount={convertedAmount}
                    // onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    selectCurrency={currencyTo}
                    onCurrencyChange={(currency)=> setCurrencyTo(currency)}
                     />  
              </div>

            {/* Convert Button */}
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
              </button>
            </form>

        </div>
    </div>
</div>

  )
}

export default App


  