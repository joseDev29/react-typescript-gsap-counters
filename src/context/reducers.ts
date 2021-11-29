import { CounterAction, CounterState } from '../interfaces/counterInterfaces'

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  const { type } = action

  switch (type) {
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      }

    case 'increase':
      return {
        previous: state.counter,
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
      }

    case 'decrease':
      return {
        previous: state.counter,
        changes: state.changes + 1,
        counter: state.counter - action.payload.value,
      }

    default:
      return state
  }
}
