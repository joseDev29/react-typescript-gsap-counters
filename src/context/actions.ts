import { CounterAction } from '../interfaces/counterInterfaces'

export const reset = (): CounterAction => ({
  type: 'reset',
})

export const increase = (value: number): CounterAction => ({
  type: 'increase',
  payload: {
    value,
  },
})

export const decrease = (value: number): CounterAction => ({
  type: 'decrease',
  payload: {
    value,
  },
})
