import { createContext, useReducer } from "react";

let StateContext = createContext({})

export default StateContext;

export function StateContextProvider(props) {

    let initialState = {
        sidebar : true,
        page : 'bio'

    }

    let reducer = (state, action) => {
        switch (action.type) {
            case 'sidebarToggle':
                return {...state, sidebar: !state.sidebar }
            case 'changeDisplay':
                return {...state, page: action.payload }
            default:
                return state
        }
    }

    let [State, dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{
            State,
            dispatch
        }}>
            {props.children}
        </StateContext.Provider>
    )

}