import {
  useMemo,
  type ElementType,
  type CSSProperties,
  createElement,
} from 'react'
import {
  type CommonProps,
  type PropsWithExcludes,
  type FormProps,
  type LabelProps,
  type Stops,
  type Direction,
  type GridPropsWithItems,
  type GridPropsWithoutItems,
} from './types'

const customGradient = (stops: Stops, direction: Direction = 'x'): string =>
  stops.length === 0
    ? 'transparent'
    : `repeating-linear-gradient(${
        direction === 'x' ? '90deg' : '0deg'
      }, ${stops
        .reduce(
          (acc, current) =>
            `${acc}${current.color} ${current.stop[0]},${current.color} ${current.stop[1]},`,
          '',
        )
        .slice(0, -1)})`

export type GridProps = CommonProps &
  (GridPropsWithItems | GridPropsWithoutItems) &
  (LabelProps | FormProps | PropsWithExcludes)

const Grid = (props: GridProps): JSX.Element => {
  const {
    children,
    as,
    gap = '0',
    size,
    ratio,
    DANGEROUS,
    stretch,
    gridTemplateColumns,
    gridTemplateRows,
    items,
    direction,
    border,
    padding,
    marginAuto,
    ...rest
  } = props

  const stylesConfig: CSSProperties = useMemo(() => {
    const gradientBackground =
      items == null ? '' : customGradient(items, direction)
    return {
      gap,
      ...(gradientBackground !== '' && {
        background: gradientBackground,
      }),
      ...(gridTemplateColumns != null && {
        gridTemplateColumns,
      }),
      ...(gridTemplateRows != null && {
        gridTemplateRows,
      }),
      ...(size != null && {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${size}), 1fr))`,
      }),
      ...(stretch != null && { width: '100%' }),
    }
  }, [
    gap,
    size,
    stretch,
    gridTemplateColumns,
    gridTemplateRows,
    items,
    direction,
  ])

  const Tag = as ?? ('div' as ElementType)

  return createElement(
    Tag,
    {
      ...rest,
      style: {
        ...(DANGEROUS != null && {
          ...DANGEROUS,
        }),
        ...stylesConfig,
      },
      'data-group': 'grid',
      ...(ratio != null && { 'data-ratio': ratio }),
      ...(border != null && { 'data-border': border }),
      ...(padding != null && { 'data-padding': padding }),
      ...(marginAuto != null && { 'data-m-auto': marginAuto }),
    },
    children,
  )
}

export default Grid

export const Stack = (props: GridProps): JSX.Element => {
  return <Grid {...props} data-stack="" />
}
