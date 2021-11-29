import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface State {
  counter: number
  clicks: number
}

interface Params {
  initialValue?: number
  maxCount: number
}

export const useCounter = ({ initialValue = 0, maxCount }: Params) => {
  const [state, setState] = useState<State>({
    counter: initialValue,
    clicks: 0,
  })

  const elementToAnimate = useRef<HTMLElement>(null)

  const timeline = useRef(gsap.timeline())

  const { counter, clicks } = state

  const onIncrease = () =>
    setState((prev) => ({
      counter: prev.counter + 1,
      clicks: prev.clicks + 1,
    }))

  const onDecrease = () =>
    setState((prev) => ({
      counter: prev.counter - 1,
      clicks: prev.clicks + 1,
    }))

  //Se asegura de que el elemento ya este construido en el DOM
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return

    //Se define la animacion al momento de renderizarse el
    //elemento por primera vez
    timeline.current
      .to(elementToAnimate.current, {
        y: -50,
        duration: 0.3,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 0.3,
        ease: 'bounce.out',
      })
      .pause()
  }, [])

  useEffect(() => {
    //Inicie la animacion desde el segundo 0
    if (clicks >= 1) {
      timeline.current.play(0)
    }
  }, [clicks])

  useEffect(() => {
    if (counter > maxCount) {
      setState((prev) => ({
        counter: 0,
        clicks: prev.clicks + 1,
      }))
    }

    return () => {
      console.log('El useEffect se limpio')
    }
  }, [counter, maxCount])

  return {
    clicks,
    counter,
    elementToAnimate,
    onIncrease,
    onDecrease,
  }
}
