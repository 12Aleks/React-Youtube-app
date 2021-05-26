import React, {useEffect, useReducer} from 'react';
import {useHistory, useLocation, useParams} from "react-router-dom";

function reducer(state, action) {
    switch (action.type) {
        case 'plus' :
            return {counter: state.counter + 1};
        case'minus':
            return {counter: state.counter - 1};
        default:
            return state.counter
    }
}


function Homes({auth, updateAuth}) {
    let history = useHistory();
    let {pathname} = useLocation();
    let usePar = useParams();

    let [state, dispatch] = useReducer(reducer, {
        counter: 1
    })


    console.log(usePar)

    const handleClick = () => {
        history.push("/about/1");
    }

    useEffect(() => {
        auth && history.push('/about/1')
    }, [auth])

    return (
        <div>
            <h1>Homes {auth}</h1>
            <button type="button" onClick={handleClick}>
                {
                    pathname === '/' ? 'Go about page' : 'Go home'
                }
            </button>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({type: 'plus'})}>Counter Plus</button>
            <button onClick={() => dispatch({type: 'minus'})}>Counter Minus</button>

            <button onClick={() => updateAuth()}>Auth</button>
        </div>
    );
}

export default Homes;
