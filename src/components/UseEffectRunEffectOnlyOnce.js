import React,{useEffect, useRef,useState} from 'react'

function UseEffectRunEffectOnlyOnce() {
    const [X,SetX] = useState(0)
    const [Y,SetY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse Event');
        SetX(e.clientX)
        SetY(e.clientY)
    }

    useEffect(()=>{
        console.log('Use Effect is Called')
        window.addEventListener('mousemove',logMousePosition)

        // this return statement is used to unmount the code in toggle display function 
        return ()=>{
          console.log('component Unmounting Code');
          window.removeEventListener('mousemove',logMousePosition)
        }

    },[])
    //here empty array is used to code optimization which is seen in console in our example in this we render it only one time
  return (
    <div>
        Hooks x- {X} y-{Y}
    </div>
  )
}

export default UseEffectRunEffectOnlyOnce