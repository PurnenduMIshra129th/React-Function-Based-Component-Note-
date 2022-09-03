
import './App.css';
import { useReducer } from 'react';

import UseEffectRunEffectOnlyOnce from './components/UseEffectRunEffectOnlyOnce';
import UseEffectAfterRender from './components/UseEffectAfterRender';
import UseEffectConditionalRender from './components/UseEffectConditionalRender';
import UseEffectWithCleanUp from './components/UseEffectWithCleanUp';
import UseStateHook from './components/UseStateHook';
import UseStateWithArray from './components/UseStateWithArray';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithPreviousState from './components/UseStateWithPreviousState';
import UseEffectWithIncorrectDependency from './components/UseEffectWithIncorrectDependency';
import FetchingData from './components/FetchingData';
import FetchingData2 from './components/FetchingData2';
import FetchingData3 from './components/FetchingData3';
import UseReducer from './components/UseReducer';
import Usereducer2 from './components/Usereducer2';
import UseReducer3 from './components/UseReducer3';
import UseReducerA from './components/UseReducerA';
import UseReducerB from './components/UseReducerB';
import UseReducerC from './components/UseReducerC';



//part of context concept
import ContexC from './components/ContexC';
import React from 'react';
import FetchingDataWithUseReducer1 from './components/FetchingDataWithUseReducer1';
import FetchingDataWithUseReducer2 from './components/FetchingDataWithUseReducer2';
import UseMemo from './components/UseMemo';
import UseRefHook from './components/UseRefHook';
import UseRefHook2 from './components/UseRefHook2';
import CustomHook1 from './components/CustomHook1';
import CustomHook2 from './components/CustomHook2';
import CustomHook3 from './components/CustomHook3';
import CustomHook4 from './components/CustomHook4';
import Customhook5 from './components/Customhook5';
export const UserContext = React.createContext()
//step-1 create a context
//step-2 assign a value and export UserContext
//step-3 add it in context-f
//another context
export const ChannelContext = React.createContext()



//useReducer With UseContext
// import React from 'react'
// import { useReducer } from 'react';


export const CounterContext = React.createContext()

const IntialState = 0
const Reducer = (CurrentState, Action) => {
  switch (Action) {
    case "Increment":
      return CurrentState + 1

    case 'Decrement':
      return CurrentState - 1

    case 'Reset':
      return IntialState

    default:
      return CurrentState


  }
}





function App() {

  //use Reducer With UseContext
  const [Count, Dispatch] = useReducer(Reducer, IntialState)

  return (
    <div className="App">
      {/* <UseStateHook/> */}

      {/* <UseStateWithPreviousState/> */}

      {/* <UseStateWithObject/> */}

      {/* <UseStateWithArray/> */}

      {/* <UseEffectAfterRender/> */}

      {/* <UseEffectConditionalRender/> */}

      {/* <UseEffectRunEffectOnlyOnce/> */}

      {/* <UseEffectWithCleanUp/> */}

      {/* <UseEffectWithIncorrectDependency/> */}

      {/* <FetchingData/> */}

      {/* <FetchingData2/> */}

      {/* <FetchingData3/>     */}

      {/* <UserContext.Provider value={'Purnendu'}>
        <ChannelContext.Provider value={'Likun'}>

            <ContexC />

        </ChannelContext.Provider>

      </UserContext.Provider> */}

      {/* <UseReducer/> */}

      {/* <Usereducer2/> */}

      {/* <UseReducer3/> */}

      {/* use reducer with use context */}
      {/* <CounterContext.Provider value={{CountState:Count,CountDispatch:Dispatch}}>
      <UseReducerA/>
      <UseReducerB/>
      <UseReducerC/>
      Count:{Count}
      </CounterContext.Provider> */}

      {/* <FetchingDataWithUseReducer1/> */}

      {/* <FetchingDataWithUseReducer2/> */}

      {/* <UseMemo /> */}

      {/* <UseRefHook/> */}

      {/* <UseRefHook2/> */}

      {/* <CustomHook1/> */}

      {/* <CustomHook3/> */}

      <Customhook5/>

    </div>
  );
}

export default App;
