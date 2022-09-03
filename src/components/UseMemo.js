import React,{useState,useMemo} from 'react'

function UseMemo() {
    const[CountrOne,SetCounterOne] = useState(0)
    const[CounterTwo,SetCounterTwo] = useState(0)

    const IncrementOne = ()=>{
        SetCounterOne(CountrOne+1)
    }
    const IncrementTwo = ()=>{
        SetCounterTwo(CounterTwo+1)
    }
    // const IsEven = ()=>{
    //     let i=0
    //     while(i<2000000000)i++
    //     //line 13 14 are unnecesary and here tey are present to slow down our code
    //     return CountrOne%2===0
    // }
    const IsEven = useMemo(()=>{
        let i=0
        while(i<2000000000)i++
        return CountrOne%2===0
    },[CountrOne])

  return (
    <div>
        <button onClick={IncrementOne}>countOne:{CountrOne}</button>
        <span>{IsEven?'Even':'Odd'}</span>
        {/* <span>{IsEven()?'Even':'Odd'}</span> */}
        <button onClick={IncrementTwo}>CountTwo:{CounterTwo}</button>
    </div>
  )
}

export default UseMemo
//it is used for software optimization
//counter two now not slow down as before