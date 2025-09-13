import React, {useState, useReducer} from 'react'

type Person = {
    name: string;
}

type State = {
    name: string | undefined;
    score: number;
    loading: boolean;
}

type Action = | {type: 'initialize' }
              | {type: 'increment' }
              | {type: 'decrement' }
              | {type: 'reset' };


// OldDudes is an example of a useReducer
export function OldDudes() {
 
    const [person, setPerson] = useState<Person>({name: "Bob"})

    // the reducer function
    function finalizeScore(state: State, action: Action): State {
        console.log(`The score is ${state.score}, the action is ${action.type} `)
        switch(action.type) {
            case 'initialize': return {...state, score: state.score, loading: false };
            case 'increment': return {...state, score: state.score+1};
            case 'decrement': return {...state, score: state.score-1};
            case 'reset': return {...state, score: 0};
            default: return state;
        }
    }

    // dispatch is just a function that will call 
    // finalizeScore with the current score (stored somewhere), and the provided action

    const [{name, score, loading}, dispatch] = useReducer(finalizeScore, {name: undefined, score: 0, loading: true});
        

    return (
        
        <div>
            <h3>{person.name}, {score}</h3>
            <button onClick={() => dispatch({type:`increment`})}>
                Add</button>
            <button onClick={() => dispatch({type:`decrement`})} >
                Subtract</button>
            <button onClick={() => dispatch({type:`reset`})} >
                Reset</button>
        </div>
    );
}
