import { CSSProperties } from 'react'
import { useCounterWithUseReducer } from '../hooks/useCounterWithUseReducer'

const containerStyle: CSSProperties = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const buttonStyle: CSSProperties = {
  borderRadius: '100%',
  width: '50px',
  height: '50px',
  border: 'none',
  fontSize: '1.4rem',
  fontWeight: '600',
  margin: '16px 8px 0',
}

const resetStyle: CSSProperties = {
  backgroundColor: '#f25c5c',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  marginTop: '16px',
  borderRadius: '4px',
}

export const CounterWithUseReducer = () => {
  const { state, onIncrease, onDecrease, onReset } = useCounterWithUseReducer()

  const { counter, changes } = state

  return (
    <div style={containerStyle}>
      <h1>Counter with useReducer</h1>

      <span style={{ fontSize: '10rem' }}>{counter}</span>

      <h3>Changes</h3>

      <span
        // ref={elementToAnimate}
        style={{ fontSize: '4rem', margin: '32px 0 16px' }}
      >
        {changes}
      </span>

      <h3>State</h3>

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <div>
        <button type='button' style={buttonStyle} onClick={() => onDecrease(1)}>
          -1
        </button>
        <button type='button' style={buttonStyle} onClick={() => onIncrease(1)}>
          +1
        </button>
      </div>
      <div>
        <button type='button' style={buttonStyle} onClick={() => onDecrease(2)}>
          -2
        </button>
        <button type='button' style={buttonStyle} onClick={() => onIncrease(2)}>
          +2
        </button>
      </div>
      <div>
        <button type='button' style={buttonStyle} onClick={() => onDecrease(5)}>
          -5
        </button>
        <button type='button' style={buttonStyle} onClick={() => onIncrease(5)}>
          +5
        </button>
      </div>
      <button type='button' style={resetStyle} onClick={onReset}>
        Reset
      </button>
    </div>
  )
}
