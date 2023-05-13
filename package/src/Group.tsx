import {
  useMemo,
  type ElementType,
  type CSSProperties,
  createElement,
} from 'react'
import {
  type PropsWithExcludes,
  type FormProps,
  type LabelProps,
  type CommonProps,
  type FlexProps,
} from './types'

export type GroupProps = CommonProps &
  FlexProps &
  (LabelProps | FormProps | PropsWithExcludes)

export const Row = (props: GroupProps): JSX.Element => {
  const {
    children,
    as,
    gap = '0',
    size,
    ratio,
    DANGEROUS,
    direction,
    stretch,
    alignItems,
    justifyContent,
    wrap,
    border,
    padding,
    marginAuto,
    ...rest
  } = props

  const stylesConfig: CSSProperties = useMemo(() => {
    return {
      gap,
      ...(wrap != null && { flexWrap: wrap }),
      ...(size != null && { flex: `1 0 ${size}` }),
      ...(direction != null && {
        flexDirection: direction,
      }),
      ...(stretch != null && {
        width: '100%',
        height: '100%',
      }),
      ...(alignItems != null && {
        alignItems,
      }),
      ...(justifyContent != null && {
        justifyContent,
      }),
    }
  }, [gap, size, stretch, alignItems, direction, justifyContent, wrap])

  const Tag = as ?? ('div' as ElementType)

  return createElement(
    Tag,
    {
      ...rest,
      style: {
        ...(DANGEROUS !== undefined && {
          ...DANGEROUS,
        }),
        ...stylesConfig,
      },
      'data-group': 'flex',
      ...(ratio != null && { 'data-ratio': ratio }),
      ...(border != null && { 'data-border': border }),
      ...(padding != null && { 'data-padding': padding }),
      ...(marginAuto != null && { 'data-m-auto': marginAuto }),
    },
    children,
  )
}

export const Dos = (props: GroupProps): JSX.Element => {
  return (
    <Row {...props} wrap="wrap" alignItems="center" justifyContent="center" />
  )
}

export const Col = (props: GroupProps): JSX.Element => {
  return <Row {...props} direction="column" />
}
