import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const InitialState = {
    Loading: true,
    Error: '',
    Post: {}
}
const Reducer = (State, Action) => {
    switch (Action.Type) {
        case 'Fetch-Success':
            return {
                Loading: false,
                Post: Action.PayLoad,
                Error: ''
            }
        case 'Fetch-Error':
            return {
                Loading: false,
                Post: {},
                Error: 'Something Went Wrong'
            }
        default:
            return State
    }
}
function FetchingDataWithUseReducer2() {
    const [State, Dispatch] = useReducer(Reducer, InitialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(Response => {
                Dispatch({ Type: 'Fetch-Success', PayLoad: Response.data })
            })
            .catch(Error => {
                Dispatch({ Type: 'Fetch-Error' })
            })
    }, [])

    return (
        <div>
            {State.Loading ? 'Loading' : State.Post.title}
            {State.Error ? Error : null}

        </div>
    )
}

export default FetchingDataWithUseReducer2