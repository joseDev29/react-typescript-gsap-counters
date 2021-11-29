export interface CounterState {
  counter: number
  previous: number
  changes: number
}

export type CounterAction =
  | { type: 'increase' | 'decrease'; payload: { value: number } }
  | { type: 'reset' }
