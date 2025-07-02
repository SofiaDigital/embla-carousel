import { AxisType } from './Axis'
import { roundToTwoDecimals } from './utils'

export type TranslateType = {
  clear: () => void
  to: (target: number) => void
  toggleActive: (active: boolean) => void
}

export function Translate(
  axis: AxisType,
  container: HTMLElement
): TranslateType {
  const translate = axis.scroll === 'x' ? x : y
  const containerStyle = container.style
  let previousTarget: number | null = null
  let disabled = false

  function x(n: number): string {
    return `translateX(${n}px)`
  }

  function y(n: number): string {
    return `translateY(${n}px)`
  }

  function to(target: number): void {
    if (disabled) return

    const newTarget = roundToTwoDecimals(axis.direction(target))
    if (newTarget === previousTarget) return

    containerStyle.transform = translate(newTarget)
    previousTarget = newTarget
  }

  function toggleActive(active: boolean): void {
    disabled = !active
  }

  function clear(): void {
    if (disabled) return
    containerStyle.transform = ''
    if (!container.getAttribute('style')) container.removeAttribute('style')
  }

  const self: TranslateType = {
    clear,
    to,
    toggleActive
  }
  return self
}
