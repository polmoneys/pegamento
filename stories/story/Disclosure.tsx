import {
  ReactNode,
  useCallback,
  useState,
  useRef,
  RefObject,
  useEffect,
  cloneElement,
  ReactElement,
} from 'react'
import { useKeyboard, useButton } from 'react-aria'

type AnyEvent = MouseEvent | TouchEvent

function useActionOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: AnyEvent): void => {
      const el = ref?.current
      // Do nothing if clicking ref's element or descendent elements
      if (el == null || el.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
    // Reload only if ref or handler changes
  }, [ref, handler])
}

interface DisclosureProps {
  id: string
  label: (open: boolean) => ReactElement
  initialOpen?: boolean
  popper?: boolean
  children: ReactNode
  className?: string
}

const Disclosure = (props: DisclosureProps): JSX.Element => {
  const {
    initialOpen = false,
    label,
    id,
    children,
    popper = false,
    ...groupProps
  } = props

  const [open, setStatus] = useState(initialOpen)

  const onToggle = useCallback(() => {
    setStatus(prev => !prev)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useActionOutside(ref, () => {
    setStatus(false)
  })

  const { keyboardProps } = useKeyboard({
    onKeyDown: event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setStatus(false)
      }
    },
  })

  const buttonRef = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(
    {
      onPress: onToggle,
      'aria-haspopup': 'true',
      'aria-controls': id,
      'aria-expanded': open,
      'aria-label': `Toggle ${label}`,
    },
    buttonRef,
  )

  return (
    <div
      style={{
        ...(popper && { position: 'relative' }),
      }}
      {...keyboardProps}
    >
      <button
        {...buttonProps}
        ref={buttonRef}
        id={`${id}-button`}
        data-button="icon"
      >
        {label(open)}
      </button>
      <div {...groupProps} hidden={!open} id={id}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  )
}

export default Disclosure
