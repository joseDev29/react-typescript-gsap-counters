import { CSSProperties } from 'react'

import { useCounter } from '../hooks/useCounter'

interface Props {
  initialValue?: number
}

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
  margin: '0 12px',
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const { counter, clicks, elementToAnimate, onDecrease, onIncrease } =
    useCounter({
      initialValue,
      maxCount: 10,
    })

  return (
    <div style={containerStyle}>
      <h1>Counter</h1>

      <span style={{ fontSize: '10rem' }}>{counter}</span>

      <h3>Clicks</h3>

      <span
        ref={elementToAnimate}
        style={{ fontSize: '4rem', margin: '32px 0 16px' }}
      >
        {clicks}
      </span>

      <div>
        <button type='button' style={buttonStyle} onClick={onDecrease}>
          -1
        </button>
        <button type='button' style={buttonStyle} onClick={onIncrease}>
          +1
        </button>
      </div>
    </div>
  )
}
