import { useReducer } from 'react'

import { counterReducer } from '../context/reducers'
import { decrease, increase, reset } from '../context/actions'

interface State {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: State = {
  counter: 0,
  previous: 0,
  changes: 0,
}

export const useCounterWithUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const onIncrease = (value: number) => {
    dispatch(increase(value))
  }

  const onDecrease = (value: number) => {
    dispatch(decrease(value))
  }

  const onReset = () => {
    dispatch(reset())
  }

  return {
    state,
    onIncrease,
    onDecrease,
    onReset,
  }
}
