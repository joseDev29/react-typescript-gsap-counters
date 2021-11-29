import { Counter } from './components/Counter'
import { CounterWithUseReducer } from './components/CounterWithUseReducer'

export const App = () => {
  return (
    <>
      <Counter />
      <CounterWithUseReducer />
    </>
  )
}
