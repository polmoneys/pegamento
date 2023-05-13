import { AriaAttributes } from 'react'

interface DisclosureTriggerProps extends AriaAttributes {
  open: boolean
}
export const DisclosureTrigger = (props: DisclosureTriggerProps): JSX.Element =>
  props.open ? (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z" />
    </svg>
  )
