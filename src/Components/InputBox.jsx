import React, {useId} from 'react'

export default function InputBox({
    //We pass "props" object
    label,                      //used to define label either "from" or "to"
    amount,                     //used to get amount from the user
    onAmountChange,             //update state when amount is changed (jab amount change hoga toh humko state update krni hogi jo humne app.jsx m banai h )
    onCurrencyChange,           //same for onCurrencyChange 
    selectCurrency = "usd",     //by default usd and user select currency type
    currencyOptions = [],       //it is used to store diff types of curr we fetch and by default for saftey we pass blank array so that our app not crash    
}) 

  {
    
    //useId hook will genrate unique id which can be used to bind things together 
    const amountInputId = useId()   
    
    return (
        <div className='flex p-3 rounded-lg text-sm  bg-white'>
            
            {/* Label(from/to) and Input(amount) -> (left side) */}
            <div className='w-1/2 flex flex-wrap p-3'>
               <label htmlFor={amountInputId} className='text-black/40 text-xl text-left  w-full'>
                {label}
               </label>

               <input 
               id ={amountInputId}
               className='outline-none bg-slate-100 rounded-lg p-2'
               type="number"
               placeholder='Amount'
               value={amount}
               onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}     //js many times take e.target.value as string  so for safty we convert into number
               />
            </div>

            {/* CurrencyType(select currency filed) (Right side) */}
            <div className = 'flex flex-wrap justify-end text-right p-3 w-1/2 '>
               <p className='text-xl text-black/40 w-full mb-8'>Currency Type</p>
               
               <select className='px-4 py-2 outline-none text-lg bg-blue-50 rounded-lg'
                 value={selectCurrency}
                 onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                
                {/* we use map to get all the currency inside  currencyOptions array*/}
                {
                currencyOptions.map((e)=> (
                   <option key={e} value={e}  >
                      {e}
                      {console.log(e)}  
                   </option>
                ))
                }

               </select>
            </div>

        </div>
    );
}