// import React, { Component } from 'react'

//  class UseStateHook extends Component {
//      constructor(props) {
//        super(props)
     
//        this.state = {
//           count:0
//        }
//      }
    
        
//      IncrementCount=()=>{
//          this.setState(
//              {
//                  count:this.state.count+1
//              }
//          )
//      }
//   render() {
//     return (
//       <div>
// <button onClick={this.IncrementCount}>count {this.state.count}</button>
//       </div>
//     )
//   }
// }

// export default UseStateHook

// the above process is for class component


//For Functional component
import React ,{useState} from 'react'

  function UseStateHook() {

    const [count,setCount]=useState(0)
    //here count is avariable intialized to zero in useState
    // and setCount is amethod
  return (
    <div>
        <button onClick={() =>setCount(count+1)}>count {count}</button>
    </div>
  )
}
export default UseStateHook
