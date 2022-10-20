import React from 'react'

export interface UlPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}
export default function Listul({children, className, ...rest}: UlPropsInterface) {
  return (
    <ul {...rest} className={className}>{children}</ul>
  )
}
